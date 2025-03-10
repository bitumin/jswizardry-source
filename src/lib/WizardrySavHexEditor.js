import {fields} from "../data/fields"

export class WizardrySavHexEditor {
    _hexArray
    _isValidRiffFile = false
    _partyOffset
    _charactersOffsets = []
    _partyItemsOffsets = []

    constructor(uint8array) {
        let hexArray = []
        for (let i in uint8array) {
            hexArray.push((0 + uint8array[i].toString(16)).slice(-2))
        }
        this._hexArray = hexArray
        this._isValidRiffFile = this._validateRiffFile()
        if (this._isValidRiffFile) {
            this._findCharactersOffsets()
            this._findPartyItemsOffsets()
        }
    }

    get isValidRiffFile() {
        return this._isValidRiffFile
    }

    exportAsInt8Array() {
        return new Uint8Array(this._hexArray.map(byte => parseInt(byte, 16)));
    }

    readValue(fieldKey) {
        const field = fields[fieldKey]
        if (!field) {
            throw `Invalid field ${fieldKey}`
        }
        return this._readOffsetValue(field)
    }

    readCharValue(fieldKey, charIdx) {
        const field = fields[fieldKey]
        if (!field) {
            throw `Invalid field ${fieldKey}`
        }
        const startOffset = this._charactersOffsets[charIdx]
        if (!startOffset) {
            throw `Invalid character index ${charIdx}`
        }
        return this._readOffsetValue({...field, offset: startOffset + field.offset})
    }

    readPartyValue(fieldKey) {
        const field = fields[fieldKey]
        if (!field) {
            throw `Invalid field ${fieldKey}`
        }
        return this._readOffsetValue({...field, offset: this._partyOffset + field.offset})
    }

    readPartyItemValue(fieldKey, itemIdx) {
        const field = fields[fieldKey]
        if (!field) {
            throw `Invalid field ${fieldKey}`
        }
        const startOffset = this._partyItemsOffsets[itemIdx]
        if (!startOffset) {
            throw `Invalid item index ${itemIdx}`
        }
        return this._readOffsetValue({...field, offset: startOffset + field.offset})
    }

    getLabel(fieldId) {
        const field = fields[fieldId]
        if (!field) {
            throw `Invalid field ${fieldId}`
        }
        return field.label;
    }

    writeValue(newValue, fieldId, charIdx = undefined) {
        const field = fields[fieldId]
        if (!field) {
            throw `Invalid field ${fieldId}`
        }
        const startOffset = this._getStartOffset(field, charIdx)
        return this._writeOffsetValue({...field, offset: startOffset + field.offset, value: newValue})
    }

    _getStartOffset(field, charIdx) {
        switch (field.segment) {
            case 'meta':
                return 0x0000
            case 'party':
                return this._partyOffset
            case 'pc':
                return this._charactersOffsets[charIdx]
          // TODO
          // case 'inv':
          //     return this._partyItemsOffsets[itemIdx]
            default:
                throw `Invalid segment ${field.segment}`
        }
    }

    _validateRiffFile() {
        const header = this.readValue('header')
        return typeof header === 'string' && header === 'RIFF'
    }

    _searchPatternOffset(pattern) {
        let offset = 0
        while (offset < this._hexArray.length) {
            if (this._hexArray.slice(offset, offset + 4).join('') === pattern.join('')) {
                return offset
            }
            ++offset
        }
        return null
    }

    _findCharactersOffsets() {
        const gverOffset = this._searchPatternOffset(['47', '56', '45', '52']); // GVER

        this._charactersOffsets[0] = gverOffset - 0xCB77 // 0xCB8A?
        console.log(`Character 0 offset: ${this._charactersOffsets[0].toString(16)}`)

        for (let i = 1; i < 8; i++) {
            this._charactersOffsets[i] = this._charactersOffsets[i - 1] + 0x1866 // each pc takes 1862 + 4 empty bytes.
            console.log(`Character ${i} offset: ${this._charactersOffsets[i].toString(16)}`)
        }
    }

    _findPartyItemsOffsets() {
        const gstaOffset = this._searchPatternOffset(['47', '53', '54', '41']); // GSTA

        this._partyOffset = gstaOffset + 0x0E

        const itemsCount = this.readValue('partyItemsCount')
        for (let i = 0; i < itemsCount; i++) {
            this._partyItemsOffsets[i] = this._partyOffset + i * 12
        }
    }

    _getIntLittleEndian(offset, size) {
        return parseInt('0x' + this._hexArray.slice(offset, offset + size).reverse().join(''), 16)
    }

    _getIntBigEndian(offset, size) {
        return parseInt('0x' + this._hexArray.slice(offset, offset + size).join(''), 16)
    }

    _getCharsString(offset, size, removePadding = true) {
        if (!removePadding) {
            return this._hexArray.slice(offset, offset + size)
                .map(hex => String.fromCharCode(parseInt(hex, 16)))
                .join('')
        }

        let bytes = this._hexArray.slice(offset, offset + size).reverse()
        let paddingCount = 0
        for (const i in bytes) {
            if (bytes[i] === '00') {
                ++paddingCount
                continue
            }
            break
        }

        if (paddingCount > 0) {
            return bytes.slice(paddingCount)
                .reverse()
                .map(hex => String.fromCharCode(parseInt(hex, 16)))
                .join('')
        }

        return bytes.reverse()
            .map(hex => String.fromCharCode(parseInt(hex, 16)))
            .join('')
    }

    _readOffsetValue({offset, size, type}) {
        switch (type) {
            case 'bool':
                return 1 === this._getIntLittleEndian(offset, size)
            case 'char':
                return this._getCharsString(offset, size)
            case 'int':
                switch (size) {
                    case 1:
                        const int8 = this._getIntLittleEndian(offset, size)
                        return int8 < 128 ? int8 : -(256 - int8)
                    case 2:
                        const int16 = this._getIntLittleEndian(offset, size)
                        return int16 < 32768 ? int16 : -(65536 - int16)
                    case 4:
                        const int32 = this._getIntLittleEndian(offset, size)
                        return int32 < 2147483648 ? int32 : -(4294967296 - int32)
                    default:
                        throw `Field getter not defined for type ${type} and size ${size}`
                }
            case 'uint':
                return this._getIntLittleEndian(offset, size)
            default:
                throw `Field getter not defined for type ${type}`
        }
    }

    _writeIntLittleEndian(offset, size, value) {
        const newHexValues = parseInt(value, 10).toString(16).padStart(size * 2 , '0').match(/.{2}/g).reverse()
        for (let i = 0, iMax = size; i < iMax; i++) {
            this._hexArray[offset + i] = newHexValues[i]
        }
    }

    _writeCharsString(offset, size, value, addPadding = true) {
        const chars = value.split('');
        for (let i = 0, iMax = Math.min(size, chars.length); i < iMax; i++) {
            this._hexArray[offset + i] = chars[i].charCodeAt(0).toString(16).padStart(2, '0').match(/.{2}/g)[0]
        }
        if (addPadding && chars.length < size) {
            for (let i = chars.length, iMax = size; i < iMax; i++) {
                this._hexArray[offset + i] = '00';
            }
        }
    }

    _writeOffsetValue({offset, size, type, value}) {
        switch (type) {
            case 'int':
                switch (size) {
                    case 1:
                        const int8 = parseInt(value)
                        this._writeIntLittleEndian(offset, size, int8 < 0 ? 256 + int8 : int8)
                        break
                    case 2:
                        const int16 = parseInt(value)
                        this._writeIntLittleEndian(offset, size, int16 < 0 ? 65536 + int16 : int16)
                        break
                    case 4:
                        const int32 = parseInt(value)
                        this._writeIntLittleEndian(offset, size, int32 < 0 ? 4294967296 + int32 : int32)
                        break
                    default:
                        throw `Field setter not defined for type ${type} and size ${size}`
                }
                break
            case 'uint':
                this._writeIntLittleEndian(offset, size, value)
                break
            case 'char':
                this._writeCharsString(offset, size, value)
                break
            default:
                throw `Field setter not defined for type ${type}`
        }
    }
}

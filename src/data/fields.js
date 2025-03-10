export const fields = {
    /*
     *   WIZARDRY 8 HEX-EDIT
     *   Credits:
     *   - Zyvr (zyvrmaccom) | https://gist.github.com/l1x/6160913
     *   - anonidiot | https://github.com/anonidiot/Wizardry8Editor
     *
     *   Notes:
     *    - The order of characters' attributes in the .sav file is L1-R1-L2-R2-L3-R3.
     *    - Each party item is made of 12 bytes.
     *    - Empty item slot = FF FF FF FF 00 00 00 00 00 00 00 00.
     */

    header: {offset: 0x0000, size: 4, type: 'char', label: 'File Header', segment: 'meta'},

    // TODO difficulty
    // TODO iron man mode

    // ----- Party
    createdPartyCount: {offset: 0x000d, size: 4, type: 'int', label: 'PCs in Party', segment: 'party'},
    totalPartyCount: {offset: 0x0015, size: 4, type: 'int', label: 'Characters in Party', segment: 'party'},
    gold: {offset: 0x0019, size: 4, type: 'int', label: 'Gold', segment: 'party'},
    selectedCharIdx: {offset: 0x001d, size: 4, type: 'int', label: 'Selected Character Index', segment: 'party'}, // index = 0-7
    partyItemsCount: {offset: 0x1791, size: 4, type: 'int', label: 'Items in Party Inventory', segment: 'party'},

    // TODO position in map

    // ----- Party Inventory
    itemId: {offset: 0x0000, size: 4, type: 'int', label: 'Item ID', segment: 'inv'},
    itemCount: {offset: 0x0004, size: 1, type: 'int', label: 'Item Count', segment: 'inv'},
    itemCharges: {offset: 0x0005, size: 1, type: 'int', label: 'Item Charges', segment: 'inv'},
    itemIsIdentified: {offset: 0x0006, size: 1, type: 'int', label: 'Item Is Identified', segment: 'inv'},
    itemIsUncursed: {offset: 0x0010, size: 1, type: 'int', label: 'Item Is Uncursed', segment: 'inv'},

    // TODO add party items editable table to UI

    // ----- Player Character: Recruited or Created
    nickname: {offset: 0x0000, size: 20, type: 'char', label: 'Nickname', segment: 'pc'},
    name: {offset: 0x0014, size: 32, type: 'char', label: 'Name', segment: 'pc'},

    // TODO profession
    // TODO gender
    // TODO race
    // TODO personality/voice
    // TODO armor class (base/avg)
    // TODO carried items
    // TODO equipped items

    // Level
    level: {offset: 0x0084, size: 4, type: 'int', label: 'Total Level', segment: 'pc'},
    fighterLevel: {offset: 0x0088, size: 4, type: 'int', label: 'Fighter Level', segment: 'pc'},
    lordLevel: {offset: 0x008C, size: 4, type: 'int', label: 'Lord Level', segment: 'pc'},
    valkyrieLevel: {offset: 0x0090, size: 4, type: 'int', label: 'Valkyrie Level', segment: 'pc'},
    rangerLevel: {offset: 0x0094, size: 4, type: 'int', label: 'Ranger Level', segment: 'pc'},
    samuraiLevel: {offset: 0x0098, size: 4, type: 'int', label: 'Samurai Level', segment: 'pc'},
    ninjaLevel: {offset: 0x009C, size: 4, type: 'int', label: 'Ninja Level', segment: 'pc'},
    monkLevel: {offset: 0x00A0, size: 4, type: 'int', label: 'Monk Level', segment: 'pc'},
    rogueLevel: {offset: 0x00A4, size: 4, type: 'int', label: 'Rogue Level', segment: 'pc'},
    gadgeteerLevel: {offset: 0x00A8, size: 4, type: 'int', label: 'Gadgeteer Level', segment: 'pc'},
    bardLevel: {offset: 0x00AC, size: 4, type: 'int', label: 'Bard Level', segment: 'pc'},
    priestLevel: {offset: 0x00B0, size: 4, type: 'int', label: 'Priest Level', segment: 'pc'},
    alchemistLevel: {offset: 0x00B4, size: 4, type: 'int', label: 'Alchemist Level', segment: 'pc'},
    bishopLevel: {offset: 0x00B8, size: 4, type: 'int', label: 'Bishop Level', segment: 'pc'},
    psionicLevel: {offset: 0x00BC, size: 4, type: 'int', label: 'Psionic Level', segment: 'pc'},
    mageLevel: {offset: 0x00C0, size: 4, type: 'int', label: 'Mage Level', segment: 'pc'},
    // Attributes
    strength: {offset: 0x00E0, size: 4, type: 'int', label: 'Strength', segment: 'pc'},
    strengthMod: {offset: 0x00E4, size: 4, type: 'int', label: 'Strength (mod)', segment: 'pc'},
    intelligence: {offset: 0x00F4, size: 4, type: 'int', label: 'Intelligence', segment: 'pc'},
    intelligenceMod: {offset: 0x00F8, size: 4, type: 'int', label: 'Intelligence (mod)', segment: 'pc'},
    piety: {offset: 0x0108, size: 4, type: 'int', label: 'Piety', segment: 'pc'},
    pietyMod: {offset: 0x010C, size: 4, type: 'int', label: 'Piety (mod)', segment: 'pc'},
    vitality: {offset: 0x011C, size: 4, type: 'int', label: 'Vitality', segment: 'pc'},
    vitalityMod: {offset: 0x0120, size: 4, type: 'int', label: 'Vitality (mod)', segment: 'pc'},
    dexterity: {offset: 0x0130, size: 4, type: 'int', label: 'Dexterity', segment: 'pc'},
    dexterityMod: {offset: 0x0134, size: 4, type: 'int', label: 'Dexterity (mod)', segment: 'pc'},
    speed: {offset: 0x0144, size: 4, type: 'int', label: 'Speed', segment: 'pc'},
    speedMod: {offset: 0x0148, size: 4, type: 'int', label: 'Speed (mod)', segment: 'pc'},
    sense: {offset: 0x0158, size: 4, type: 'int', label: 'Sense', segment: 'pc'},
    senseMod: {offset: 0x015C, size: 4, type: 'int', label: 'Sense (mod)', segment: 'pc'},
    // Weapon Skills
    sword: {offset: 0x019A, size: 4, type: 'int', label: 'Sword', segment: 'pc'},
    swordMod: {offset: 0x019E, size: 4, type: 'int', label: 'Sword (mod)', segment: 'pc'},
    axe: {offset: 0x01C0, size: 4, type: 'int', label: 'Axe', segment: 'pc'},
    axeMod: {offset: 0x01C4, size: 4, type: 'int', label: 'Axe (mod)', segment: 'pc'},
    polearm: {offset: 0x01E6, size: 4, type: 'int', label: 'Polearm', segment: 'pc'},
    polearmMod: {offset: 0x01EA, size: 4, type: 'int', label: 'Polearm (mod)', segment: 'pc'},
    mace: {offset: 0x0210, size: 4, type: 'int', label: 'Mace & Flail', segment: 'pc'}, // fixed
    maceMod: {offset: 0x0214, size: 4, type: 'int', label: 'Mace & Flail (mod)', segment: 'pc'},
    dagger: {offset: 0x0232, size: 4, type: 'int', label: 'Dagger', segment: 'pc'},
    daggerMod: {offset: 0x0236, size: 4, type: 'int', label: 'Dagger (mod)', segment: 'pc'},
    staff: {offset: 0x0258, size: 4, type: 'int', label: 'Staff & Wand', segment: 'pc'},
    staffMod: {offset: 0x025C, size: 4, type: 'int', label: 'Staff & Wand (mod)', segment: 'pc'},
    shield: {offset: 0x027E, size: 4, type: 'int', label: 'Shield', segment: 'pc'},
    shieldMod: {offset: 0x0282, size: 4, type: 'int', label: 'Shield (mod)', segment: 'pc'},
    modernWeapon: {offset: 0x02A4, size: 4, type: 'int', label: 'Modern Weapon', segment: 'pc'},
    modernWeaponMod: {offset: 0x02A8, size: 4, type: 'int', label: 'Modern Weapon (mod)', segment: 'pc'},
    bow: {offset: 0x02CA, size: 4, type: 'int', label: 'Bow', segment: 'pc'},
    bowMod: {offset: 0x02CE, size: 4, type: 'int', label: 'Bow (mod)', segment: 'pc'},
    throwSling: {offset: 0x02F0, size: 4, type: 'int', label: 'Throw & Sling', segment: 'pc'},
    throwSlingMod: {offset: 0x02F4, size: 4, type: 'int', label: 'Throw & Sling (mod)', segment: 'pc'},
    // Academic Skills
    criticalStrike: {offset: 0x046C, size: 4, type: 'int', label: 'Critical Strike', segment: 'pc'},
    criticalStrikeMod: {offset: 0x0470, size: 4, type: 'int', label: 'Critical Strike (mod)', segment: 'pc'},
    artifact: {offset: 0x0492, size: 4, type: 'int', label: 'Artifact', segment: 'pc'},
    artifactMod: {offset: 0x0496, size: 4, type: 'int', label: 'Artifact (mod)', segment: 'pc'},
    mythology: {offset: 0x04B8, size: 4, type: 'int', label: 'Mythology', segment: 'pc'},
    mythologyMod: {offset: 0x04BC, size: 4, type: 'int', label: 'Mythology (mod)', segment: 'pc'},
    communication: {offset: 0x04DE, size: 4, type: 'int', label: 'Communication', segment: 'pc'},
    communicationMod: {offset: 0x04E2, size: 4, type: 'int', label: 'Communication (mod)', segment: 'pc'},
    engineering: {offset: 0x0504, size: 4, type: 'int', label: 'Engineering', segment: 'pc'},
    engineeringMod: {offset: 0x0508, size: 4, type: 'int', label: 'Engineering (mod)', segment: 'pc'},
    // Physical Skills
    lockTrap: {offset: 0x0316, size: 4, type: 'int', label: 'Lock & Trap', segment: 'pc'},
    lockTrapMod: {offset: 0x031A, size: 4, type: 'int', label: 'Lock & Trap (mod)', segment: 'pc'},
    stealth: {offset: 0x033C, size: 4, type: 'int', label: 'Stealth', segment: 'pc'},
    stealthMod: {offset: 0x0340, size: 4, type: 'int', label: 'Stealth (mod)', segment: 'pc'},
    music: {offset: 0x0362, size: 4, type: 'int', label: 'Music', segment: 'pc'},
    musicMod: {offset: 0x0366, size: 4, type: 'int', label: 'Music (mod)', segment: 'pc'},
    pickPocket: {offset: 0x0388, size: 4, type: 'int', label: 'Pick Pocket', segment: 'pc'},
    pickPocketMod: {offset: 0x038C, size: 4, type: 'int', label: 'Pick Pocket (mod)', segment: 'pc'},
    martialArt: {offset: 0x03AE, size: 4, type: 'int', label: 'Martial Art', segment: 'pc'},
    martialArtMod: {offset: 0x03B2, size: 4, type: 'int', label: 'Martial Art (mod)', segment: 'pc'},
    scouting: {offset: 0x03D4, size: 4, type: 'int', label: 'Scouting', segment: 'pc'},
    scoutingMod: {offset: 0x03D8, size: 4, type: 'int', label: 'Scouting (mod)', segment: 'pc'},
    closeCombat: {offset: 0x03FA, size: 4, type: 'int', label: 'Close Combat', segment: 'pc'},
    closeCombatMod: {offset: 0x03FE, size: 4, type: 'int', label: 'Close Combat (mod)', segment: 'pc'},
    rangeCombat: {offset: 0x0420, size: 4, type: 'int', label: 'Range Combat', segment: 'pc'},
    rangeCombatMod: {offset: 0x0424, size: 4, type: 'int', label: 'Range Combat (mod)', segment: 'pc'},
    dualWeapon: {offset: 0x0446, size: 4, type: 'int', label: 'Dual Weapon', segment: 'pc'},
    dualWeaponMod: {offset: 0x044A, size: 4, type: 'int', label: 'Dual Weapon (mod)', segment: 'pc'},
    // Magic skills
    wizardry: {offset: 0x052A, size: 4, type: 'int', label: 'Wizardry', segment: 'pc'},
    wizardryMod: {offset: 0x052E, size: 4, type: 'int', label: 'Wizardry (mod)', segment: 'pc'},
    divinity: {offset: 0x0550, size: 4, type: 'int', label: 'Divinity', segment: 'pc'},
    divinityMod: {offset: 0x0554, size: 4, type: 'int', label: 'Divinity (mod)', segment: 'pc'},
    alchemy: {offset: 0x0576, size: 4, type: 'int', label: 'Alchemy', segment: 'pc'},
    alchemyMod: {offset: 0x057A, size: 4, type: 'int', label: 'Alchemy (mod)', segment: 'pc'},
    psionics: {offset: 0x059C, size: 4, type: 'int', label: 'Psionics', segment: 'pc'},
    psionicsMod: {offset: 0x06A0, size: 4, type: 'int', label: 'Psionics (mod)', segment: 'pc'},
    fireMagic: {offset: 0x05C2, size: 4, type: 'int', label: 'Fire Magic Skill', segment: 'pc'},
    fireMagicMod: {offset: 0x05C6, size: 4, type: 'int', label: 'Fire Magic Skill (mod)', segment: 'pc'},
    waterMagic: {offset: 0x05E8, size: 4, type: 'int', label: 'Water Magic Skill', segment: 'pc'},
    waterMagicMod: {offset: 0x05EC, size: 4, type: 'int', label: 'Water Magic Skill (mod)', segment: 'pc'},
    airMagic: {offset: 0x060E, size: 4, type: 'int', label: 'Air Magic Skill', segment: 'pc'},
    airMagicMod: {offset: 0x0612, size: 4, type: 'int', label: 'Air Magic Skill (mod)', segment: 'pc'},
    earthMagic: {offset: 0x0634, size: 4, type: 'int', label: 'Earth Magic Skill', segment: 'pc'},
    earthMagicMod: {offset: 0x0638, size: 4, type: 'int', label: 'Earth Magic Skill (mod)', segment: 'pc'},
    mentalMagic: {offset: 0x065A, size: 4, type: 'int', label: 'Mental Magic Skill', segment: 'pc'},
    mentalMagicMod: {offset: 0x065E, size: 4, type: 'int', label: 'Mental Magic Skill (mod)', segment: 'pc'},
    divineMagic: {offset: 0x0680, size: 4, type: 'int', label: 'Divine Magic Skill', segment: 'pc'},
    divineMagicMod: {offset: 0x0684, size: 4, type: 'int', label: 'Divine Magic Skill (mod)', segment: 'pc'},
    // Special skills
    powerStrike: {offset: 0x06A6, size: 4, type: 'int', label: 'Power Strike', segment: 'pc'},
    powerStrikeMod: {offset: 0x06AA, size: 4, type: 'int', label: 'Power Strike (mod)', segment: 'pc'},
    powerCast: {offset: 0x06CC, size: 4, type: 'int', label: 'Power Cast', segment: 'pc'},
    powerCastMod: {offset: 0x06D0, size: 4, type: 'int', label: 'Power Cast (mod)', segment: 'pc'},
    ironWill: {offset: 0x06F2, size: 4, type: 'int', label: 'Iron Will', segment: 'pc'}, // fixed
    ironWillMod: {offset: 0x06F6, size: 4, type: 'int', label: 'Iron Will (mod)', segment: 'pc'}, // fixed
    ironSkin: {offset: 0x0718, size: 4, type: 'int', label: 'Iron Skin', segment: 'pc'},
    ironSkinMod: {offset: 0x071C, size: 4, type: 'int', label: 'Iron Skin (mod)', segment: 'pc'},
    reflextion: {offset: 0x073E, size: 4, type: 'int', label: 'Reflection', segment: 'pc'},
    reflextionMod: {offset: 0x0742, size: 4, type: 'int', label: 'Reflection (mod)', segment: 'pc'},
    snakeSpeed: {offset: 0x0764, size: 4, type: 'int', label: 'Snake Speed', segment: 'pc'}, // fixed
    snakeSpeedMod: {offset: 0x0768, size: 4, type: 'int', label: 'Snake Speed (mod)', segment: 'pc'},
    eagleEye: {offset: 0x078A, size: 4, type: 'int', label: 'Eagle Eye', segment: 'pc'},
    eagleEyeMod: {offset: 0x078E, size: 4, type: 'int', label: 'Eagle Eye (mod)', segment: 'pc'},
    // XP
    xp: {offset: 0x09E8, size: 4, type: 'int', label: 'XP (current)', segment: 'pc'},
    xpNextLevel: {offset: 0x09EC, size: 4, type: 'int', label: 'XP (to next lvl)', segment: 'pc'},
    // HP
    hpMax: {offset: 0x0B08, size: 4, type: 'int', label: 'HP (max)', segment: 'pc'},
    hpCurrent: {offset: 0x0B0C, size: 4, type: 'int', label: 'HP (current)', segment: 'pc'},
    // Stamina
    staminaMax: {offset: 0x0B14, size: 4, type: 'int', label: 'Stamina (max)', segment: 'pc'},
    staminaCurrent: {offset: 0x0B18, size: 4, type: 'int', label: 'Stamina (current)', segment: 'pc'},
    // Spell points
    fireSpellMax: {offset: 0x0B20, size: 4, type: 'int', label: 'Fire Spell Point Max', segment: 'pc'},
    fireSpellCurrent: {offset: 0x0B40, size: 4, type: 'int', label: 'Fire Spell Point Current', segment: 'pc'},
    waterSpellMax: {offset: 0x0B24, size: 4, type: 'int', label: 'Water Spell Point Max', segment: 'pc'},
    waterSpellCurrent: {offset: 0x0B44, size: 4, type: 'int', label: 'Water Spell Point Current', segment: 'pc'},
    airSpellMax: {offset: 0x0B28, size: 4, type: 'int', label: 'Air Spell Point Max', segment: 'pc'},
    airSpellCurrent: {offset: 0x0B48, size: 4, type: 'int', label: 'Air Spell Point Current', segment: 'pc'},
    earthSpellMax: {offset: 0x0B2C, size: 4, type: 'int', label: 'Earth Spell Point Max', segment: 'pc'},
    earthSpellCurrent: {offset: 0x0B4C, size: 4, type: 'int', label: 'Earth Spell Point Current', segment: 'pc'},
    mentalSpellMax: {offset: 0x0B30, size: 4, type: 'int', label: 'Mental Spell Point Max', segment: 'pc'},
    mentalSpellCurrent: {offset: 0x0B50, size: 4, type: 'int', label: 'Mental Spell Point Current', segment: 'pc'},
    divineSpellMax: {offset: 0x0B34, size: 4, type: 'int', label: 'Divine Spell Point Max', segment: 'pc'},
    divineSpellCurrent: {offset: 0x0B54, size: 4, type: 'int', label: 'Divine Spell Point Current', segment: 'pc'},
    // Spell resistance
    spellResFire: {offset: 0x0ED8, size: 4, type: 'int', label: 'Fire Spell Resistance', segment: 'pc'},
    spellResFireMod: {offset: 0x0EDC, size: 4, type: 'int', label: 'Fire Spell Resistance (mod)', segment: 'pc'},
    spellResWater: {offset: 0x0EE8, size: 4, type: 'int', label: 'Water Spell Resistance', segment: 'pc'},
    spellResWaterMod: {offset: 0x0EEC, size: 4, type: 'int', label: 'Water Spell Resistance (mod)', segment: 'pc'},
    spellResAir: {offset: 0x0EF8, size: 4, type: 'int', label: 'Air Spell Resistance', segment: 'pc'},
    spellResAirMod: {offset: 0x0EFC, size: 4, type: 'int', label: 'Air Spell Resistance (mod)', segment: 'pc'},
    spellResEarth: {offset: 0x0F08, size: 4, type: 'int', label: 'Earth Spell Resistance', segment: 'pc'},
    spellResEarthMod: {offset: 0x0F0C, size: 4, type: 'int', label: 'Earth Spell Resistance (mod)', segment: 'pc'},
    spellResMental: {offset: 0x0F18, size: 4, type: 'int', label: 'Mental Spell Resistance', segment: 'pc'},
    spellResMentalMod: {offset: 0x0F1C, size: 4, type: 'int', label: 'Mental Spell Resistance (mod)', segment: 'pc'},
    spellResDivine: {offset: 0x0F28, size: 4, type: 'int', label: 'Divine Spell Resistance', segment: 'pc'},
    spellResDivineMod: {offset: 0x0F2C, size: 4, type: 'int', label: 'Divine Spell Resistance (mod)', segment: 'pc'},
}

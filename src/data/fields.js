export const fields = {
    /*
     *   WIZARDRY 8 HEX-EDIT
     *   Credits:
     *   - Zyvr (zyvrmaccom) | https://gist.github.com/l1x/6160913
     *   - anonidiot | https://github.com/anonidiot/Wizardry8Editor
     *   - https://i45.narod.ru/wiz/
     *
     *   Notes:
     *    - The order of characters' attributes in the .sav file is L1-R1-L2-R2-L3-R3.
     *    - Each party item is made of 12 bytes.
     *    - Empty item slot = FF FF FF FF 00 00 00 00 00 00 00 00.
     *    - Max 500 items in party inventory.
     *    - XP/level: https://www.zimlab.com/wizardry/recovered/flamestryke/wizardry8/charinfow8/experience.html
     *    - Items: https://www.tk421.net/wizardry/wiz8items.shtml
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

    // TODO current map
    // TODO position in map
    // TODO position heading

    // ----- Party Inventory
    itemId: {offset: 0x0000, size: 4, type: 'int', label: 'Item ID', segment: 'inv'},
    itemCount: {offset: 0x0004, size: 1, type: 'int', label: 'Item Count', segment: 'inv'},
    itemCharges: {offset: 0x0005, size: 1, type: 'int', label: 'Item Charges', segment: 'inv'},
    itemIsIdentified: {offset: 0x0006, size: 1, type: 'int', label: 'Item Has Been Identified', segment: 'inv'},
    itemIsUncursed: {offset: 0x000A, size: 1, type: 'int', label: 'Item Has Been Uncursed', segment: 'inv'},

    // ----- Player Character: Recruited or Created
    // inParty: {offset: 0x0004, size: 1, type: 'int', label: 'In Party', segment: 'pc'}, // TODO if we shift all pc segment values +5 bytes, we could use this one as well
    nickname: {offset: 0x0000, size: 9, type: 'char', label: 'Nickname', segment: 'pc'},
    name: {offset: 0x0014, size: 39, type: 'char', label: 'Name', segment: 'pc'},
    currentProfession: {offset: 0x0064, size: 4, type: 'int', label: 'Current Profession', segment: 'pc'},
    startingProfession: {offset: 0x0068, size: 4, type: 'int', label: 'Starting Profession', segment: 'pc'},
    race: {offset: 0x006C, size: 4, type: 'int', label: 'Race', segment: 'pc'},
    gender: {offset: 0x0070, size: 4, type: 'int', label: 'Gender', segment: 'pc'},
    portraitIndex: {offset: 0x0074, size: 4, type: 'int', label: 'Portrait Index', segment: 'pc'},
    personality: {offset: 0x007C, size: 4, type: 'int', label: 'Personality', segment: 'pc'},
    voice: {offset: 0x0080, size: 4, type: 'int', label: 'Voice', segment: 'pc'},
    // Levels
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
    sense: {offset: 0x0158, size: 4, type: 'int', label: 'Senses', segment: 'pc'},
    senseMod: {offset: 0x015C, size: 4, type: 'int', label: 'Senses (mod)', segment: 'pc'},
    // Weapon Skills
    sword: {offset: 0x019A, size: 4, type: 'int', label: 'Sword', segment: 'pc'},
    swordMod: {offset: 0x019E, size: 4, type: 'int', label: 'Sword (mod)', segment: 'pc'},
    axe: {offset: 0x01C0, size: 4, type: 'int', label: 'Axe', segment: 'pc'},
    axeMod: {offset: 0x01C4, size: 4, type: 'int', label: 'Axe (mod)', segment: 'pc'},
    polearm: {offset: 0x01E6, size: 4, type: 'int', label: 'Polearm', segment: 'pc'},
    polearmMod: {offset: 0x01EA, size: 4, type: 'int', label: 'Polearm (mod)', segment: 'pc'},
    mace: {offset: 0x020C, size: 4, type: 'int', label: 'Mace & Flail', segment: 'pc'}, // fixed
    maceMod: {offset: 0x0210, size: 4, type: 'int', label: 'Mace & Flail (mod)', segment: 'pc'},
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
    fireMagic: {offset: 0x05C2, size: 4, type: 'int', label: 'Fire Magic', segment: 'pc'},
    fireMagicMod: {offset: 0x05C6, size: 4, type: 'int', label: 'Fire Magic (mod)', segment: 'pc'},
    waterMagic: {offset: 0x05E8, size: 4, type: 'int', label: 'Water Magic', segment: 'pc'},
    waterMagicMod: {offset: 0x05EC, size: 4, type: 'int', label: 'Water Magic (mod)', segment: 'pc'},
    airMagic: {offset: 0x060E, size: 4, type: 'int', label: 'Air Magic', segment: 'pc'},
    airMagicMod: {offset: 0x0612, size: 4, type: 'int', label: 'Air Magic (mod)', segment: 'pc'},
    earthMagic: {offset: 0x0634, size: 4, type: 'int', label: 'Earth Magic', segment: 'pc'},
    earthMagicMod: {offset: 0x0638, size: 4, type: 'int', label: 'Earth Magic (mod)', segment: 'pc'},
    mentalMagic: {offset: 0x065A, size: 4, type: 'int', label: 'Mental Magic', segment: 'pc'},
    mentalMagicMod: {offset: 0x065E, size: 4, type: 'int', label: 'Mental Magic (mod)', segment: 'pc'},
    divineMagic: {offset: 0x0680, size: 4, type: 'int', label: 'Divine Magic', segment: 'pc'},
    divineMagicMod: {offset: 0x0684, size: 4, type: 'int', label: 'Divine Magic (mod)', segment: 'pc'},
    // Special skills
    powerStrike: {offset: 0x06A6, size: 4, type: 'int', label: 'Power Strike', segment: 'pc'},
    powerStrikeMod: {offset: 0x06AA, size: 4, type: 'int', label: 'Power Strike (mod)', segment: 'pc'},
    powerCast: {offset: 0x06CC, size: 4, type: 'int', label: 'Power Cast', segment: 'pc'},
    powerCastMod: {offset: 0x06D0, size: 4, type: 'int', label: 'Power Cast (mod)', segment: 'pc'},
    ironWill: {offset: 0x06F2, size: 4, type: 'int', label: 'Iron Will', segment: 'pc'}, // fixed
    ironWillMod: {offset: 0x06F6, size: 4, type: 'int', label: 'Iron Will (mod)', segment: 'pc'}, // fixed
    ironSkin: {offset: 0x0718, size: 4, type: 'int', label: 'Iron Skin', segment: 'pc'},
    ironSkinMod: {offset: 0x071C, size: 4, type: 'int', label: 'Iron Skin (mod)', segment: 'pc'},
    reflextion: {offset: 0x073E, size: 4, type: 'int', label: 'Reflextion', segment: 'pc'},
    reflextionMod: {offset: 0x0742, size: 4, type: 'int', label: 'Reflextion (mod)', segment: 'pc'},
    snakeSpeed: {offset: 0x0764, size: 4, type: 'int', label: 'Snake Speed', segment: 'pc'}, // fixed
    snakeSpeedMod: {offset: 0x0768, size: 4, type: 'int', label: 'Snake Speed (mod)', segment: 'pc'},
    eagleEye: {offset: 0x078A, size: 4, type: 'int', label: 'Eagle Eye', segment: 'pc'},
    eagleEyeMod: {offset: 0x078E, size: 4, type: 'int', label: 'Eagle Eye (mod)', segment: 'pc'},
    // XP
    xp: {offset: 0x09E8, size: 4, type: 'uint', label: 'XP (current)', segment: 'pc'},
    xpNextLevel: {offset: 0x09EC, size: 4, type: 'uint', label: 'XP (to next lvl)', segment: 'pc'},
    xpPreviousRise: {offset: 0x09F0, size: 4, type: 'uint', label: 'XP (for previous level rise)', segment: 'pc'},
    killsCount: {offset: 0x09F4, size: 4, type: 'int', label: 'Kills Count', segment: 'pc'},
    deathsCount: {offset: 0x09F8, size: 4, type: 'int', label: 'Deaths Count', segment: 'pc'},
    // Conditions
    condNormal: {offset: 0x09FC, size: 4, type: 'int', label: 'Normal', segment: 'pc'},
    condDrained: {offset: 0x0A00, size: 4, type: 'int', label: 'Drained', segment: 'pc'},
    condDiseased: {offset: 0x0A04, size: 4, type: 'int', label: 'Diseased', segment: 'pc'},
    condIrritated: {offset: 0x0A08, size: 4, type: 'int', label: 'Irritated', segment: 'pc'},
    condNauseated: {offset: 0x0A0C, size: 4, type: 'int', label: 'Nauseated', segment: 'pc'},
    condSlowed: {offset: 0x0A10, size: 4, type: 'int', label: 'Slowed', segment: 'pc'},
    condAfraid: {offset: 0x0A14, size: 4, type: 'int', label: 'Afraid', segment: 'pc'},
    condPoisoned: {offset: 0x0A18, size: 4, type: 'int', label: 'Poisoned', segment: 'pc'},
    condSilenced: {offset: 0x0A1C, size: 4, type: 'int', label: 'Silenced', segment: 'pc'},
    condHexed: {offset: 0x0A20, size: 4, type: 'int', label: 'Hexed', segment: 'pc'},
    condEnthralled: {offset: 0x0A24, size: 4, type: 'int', label: 'Enthralled', segment: 'pc'},
    condInsane: {offset: 0x0A28, size: 4, type: 'int', label: 'Insane', segment: 'pc'},
    condBlind: {offset: 0x0A2C, size: 4, type: 'int', label: 'Blind', segment: 'pc'},
    condTurncoat: {offset: 0x0A30, size: 4, type: 'int', label: 'Turncoat', segment: 'pc'},
    condWebbed: {offset: 0x0A34, size: 4, type: 'int', label: 'Webbed', segment: 'pc'},
    condAsleep: {offset: 0x0A38, size: 4, type: 'int', label: 'Asleep', segment: 'pc'},
    condParalyzed: {offset: 0x0A3C, size: 4, type: 'int', label: 'Paralyzed', segment: 'pc'},
    condUnconscious: {offset: 0x0A40, size: 4, type: 'int', label: 'Unconscious', segment: 'pc'},
    condDead: {offset: 0x0A44, size: 4, type: 'int', label: 'Dead', segment: 'pc'},
    condMissing: {offset: 0x0A48, size: 4, type: 'int', label: 'Missing', segment: 'pc'},
    poisonStrength: {offset: 0x0B04, size: 4, type: 'int', label: 'Poison Strength', segment: 'pc'},
    // HP & Stamina
    hpMax: {offset: 0x0B08, size: 4, type: 'int', label: 'HP (max)', segment: 'pc'},
    hpCurrent: {offset: 0x0B0C, size: 4, type: 'int', label: 'HP (current)', segment: 'pc'}, // If a character is dead, value must be 0, or it won't be revivable
    hpDrain: {offset: 0x0B10, size: 4, type: 'int', label: 'HP (drain)', segment: 'pc'}, // Negative value when active
    staminaMax: {offset: 0x0B14, size: 4, type: 'int', label: 'Stamina (max)', segment: 'pc'},
    staminaCurrent: {offset: 0x0B18, size: 4, type: 'int', label: 'Stamina (current)', segment: 'pc'},
    staminaDrain: {offset: 0x0B1C, size: 4, type: 'int', label: 'Stamina (drain)', segment: 'pc'}, // Negative value when active
    // Spell points (calculated)
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
    // TODO healing rate
    // TODO rest rate
    // TODO magic points recovery
    // TODO armor class (base/avg)
    // TODO carried items
    // TODO equipped items
    // TODO spells
    // Encumbrance
    personalLoad: {offset: 0x0BB4, size: 4, type: 'int', label: 'Personal Load', segment: 'pc'}, // 1/10th pounds
    sharedLoad: {offset: 0x0BB8, size: 4, type: 'int', label: 'Shared Load', segment: 'pc'}, // 1/10th pounds
    encumbrance: {offset: 0x0BBC, size: 4, type: 'int', label: 'Encumbrance', segment: 'pc'}, // 1/10th pounds
    carryCapacity: {offset: 0x0BC0, size: 4, type: 'int', label: 'Carry Capacity', segment: 'pc'}, // 1/10th pounds
    loadCategory: {offset: 0x0BC4, size: 4, type: 'int', label: 'Load Category', segment: 'pc'}, // Encumbrance penalties for combat
    // Spells
    spell1: {offset: 0x0BC8, size: 4, type: 'int', label: 'Spell 1', segment: 'pc'},
    spell2: {offset: 0x0BCC, size: 4, type: 'int', label: 'Spell 2', segment: 'pc'},
    spell3: {offset: 0x0BD0, size: 4, type: 'int', label: 'Spell 3', segment: 'pc'},
    spell4: {offset: 0x0BD4, size: 4, type: 'int', label: 'Spell 4', segment: 'pc'},
    spell5: {offset: 0x0BD8, size: 4, type: 'int', label: 'Spell 5', segment: 'pc'},
    spell6: {offset: 0x0BDC, size: 4, type: 'int', label: 'Spell 6', segment: 'pc'},
    spell7: {offset: 0x0BE0, size: 4, type: 'int', label: 'Spell 7', segment: 'pc'},
    spell8: {offset: 0x0BE4, size: 4, type: 'int', label: 'Spell 8', segment: 'pc'},
    spell9: {offset: 0x0BE8, size: 4, type: 'int', label: 'Spell 9', segment: 'pc'},
    spell10: {offset: 0x0BEC, size: 4, type: 'int', label: 'Spell 10', segment: 'pc'},
    spell11: {offset: 0x0BF0, size: 4, type: 'int', label: 'Spell 11', segment: 'pc'},
    spell12: {offset: 0x0BF4, size: 4, type: 'int', label: 'Spell 12', segment: 'pc'},
    spell13: {offset: 0x0BF8, size: 4, type: 'int', label: 'Spell 13', segment: 'pc'},
    spell14: {offset: 0x0BFC, size: 4, type: 'int', label: 'Spell 14', segment: 'pc'},
    spell15: {offset: 0x0C00, size: 4, type: 'int', label: 'Spell 15', segment: 'pc'},
    spell16: {offset: 0x0C04, size: 4, type: 'int', label: 'Spell 16', segment: 'pc'},
    spell17: {offset: 0x0C08, size: 4, type: 'int', label: 'Spell 17', segment: 'pc'},
    spell18: {offset: 0x0C0C, size: 4, type: 'int', label: 'Spell 18', segment: 'pc'},
    spell19: {offset: 0x0C10, size: 4, type: 'int', label: 'Spell 19', segment: 'pc'},
    spell20: {offset: 0x0C14, size: 4, type: 'int', label: 'Spell 20', segment: 'pc'},
    spell21: {offset: 0x0C18, size: 4, type: 'int', label: 'Spell 21', segment: 'pc'},
    spell22: {offset: 0x0C1C, size: 4, type: 'int', label: 'Spell 22', segment: 'pc'},
    spell23: {offset: 0x0C20, size: 4, type: 'int', label: 'Spell 23', segment: 'pc'},
    spell24: {offset: 0x0C24, size: 4, type: 'int', label: 'Spell 24', segment: 'pc'},
    spell25: {offset: 0x0C28, size: 4, type: 'int', label: 'Spell 25', segment: 'pc'},
    spell26: {offset: 0x0C2C, size: 4, type: 'int', label: 'Spell 26', segment: 'pc'},
    spell27: {offset: 0x0C30, size: 4, type: 'int', label: 'Spell 27', segment: 'pc'},
    spell28: {offset: 0x0C34, size: 4, type: 'int', label: 'Spell 28', segment: 'pc'},
    spell29: {offset: 0x0C38, size: 4, type: 'int', label: 'Spell 29', segment: 'pc'},
    spell30: {offset: 0x0C3C, size: 4, type: 'int', label: 'Spell 30', segment: 'pc'},
    spell31: {offset: 0x0C40, size: 4, type: 'int', label: 'Spell 31', segment: 'pc'},
    spell32: {offset: 0x0C44, size: 4, type: 'int', label: 'Spell 32', segment: 'pc'},
    spell33: {offset: 0x0C48, size: 4, type: 'int', label: 'Spell 33', segment: 'pc'},
    spell34: {offset: 0x0C4C, size: 4, type: 'int', label: 'Spell 34', segment: 'pc'},
    spell35: {offset: 0x0C50, size: 4, type: 'int', label: 'Spell 35', segment: 'pc'},
    spell36: {offset: 0x0C54, size: 4, type: 'int', label: 'Spell 36', segment: 'pc'},
    spell37: {offset: 0x0C58, size: 4, type: 'int', label: 'Spell 37', segment: 'pc'},
    spell38: {offset: 0x0C5C, size: 4, type: 'int', label: 'Spell 38', segment: 'pc'},
    spell39: {offset: 0x0C60, size: 4, type: 'int', label: 'Spell 39', segment: 'pc'},
    spell40: {offset: 0x0C64, size: 4, type: 'int', label: 'Spell 40', segment: 'pc'},
    spell41: {offset: 0x0C68, size: 4, type: 'int', label: 'Spell 41', segment: 'pc'},
    spell42: {offset: 0x0C6C, size: 4, type: 'int', label: 'Spell 42', segment: 'pc'},
    spell43: {offset: 0x0C70, size: 4, type: 'int', label: 'Spell 43', segment: 'pc'},
    spell44: {offset: 0x0C74, size: 4, type: 'int', label: 'Spell 44', segment: 'pc'},
    spell45: {offset: 0x0C78, size: 4, type: 'int', label: 'Spell 45', segment: 'pc'},
    spell46: {offset: 0x0C7C, size: 4, type: 'int', label: 'Spell 46', segment: 'pc'},
    spell47: {offset: 0x0C80, size: 4, type: 'int', label: 'Spell 47', segment: 'pc'},
    spell48: {offset: 0x0C84, size: 4, type: 'int', label: 'Spell 48', segment: 'pc'},
    spell49: {offset: 0x0C88, size: 4, type: 'int', label: 'Spell 49', segment: 'pc'},
    spell50: {offset: 0x0C8C, size: 4, type: 'int', label: 'Spell 50', segment: 'pc'},
    spell51: {offset: 0x0C90, size: 4, type: 'int', label: 'Spell 51', segment: 'pc'},
    spell52: {offset: 0x0C94, size: 4, type: 'int', label: 'Spell 52', segment: 'pc'},
    spell53: {offset: 0x0C98, size: 4, type: 'int', label: 'Spell 53', segment: 'pc'},
    spell54: {offset: 0x0C9C, size: 4, type: 'int', label: 'Spell 54', segment: 'pc'},
    spell55: {offset: 0x0CA0, size: 4, type: 'int', label: 'Spell 55', segment: 'pc'},
    spell56: {offset: 0x0CA4, size: 4, type: 'int', label: 'Spell 56', segment: 'pc'},
    spell57: {offset: 0x0CA8, size: 4, type: 'int', label: 'Spell 57', segment: 'pc'},
    spell58: {offset: 0x0CAC, size: 4, type: 'int', label: 'Spell 58', segment: 'pc'},
    spell59: {offset: 0x0CB0, size: 4, type: 'int', label: 'Spell 59', segment: 'pc'},
    spell60: {offset: 0x0CB4, size: 4, type: 'int', label: 'Spell 60', segment: 'pc'},
    spell61: {offset: 0x0CB8, size: 4, type: 'int', label: 'Spell 61', segment: 'pc'},
    spell62: {offset: 0x0CBC, size: 4, type: 'int', label: 'Spell 62', segment: 'pc'},
    spell63: {offset: 0x0CC0, size: 4, type: 'int', label: 'Spell 63', segment: 'pc'},
    spell64: {offset: 0x0CC4, size: 4, type: 'int', label: 'Spell 64', segment: 'pc'},
    spell65: {offset: 0x0CC8, size: 4, type: 'int', label: 'Spell 65', segment: 'pc'},
    spell66: {offset: 0x0CCC, size: 4, type: 'int', label: 'Spell 66', segment: 'pc'},
    spell67: {offset: 0x0CD0, size: 4, type: 'int', label: 'Spell 67', segment: 'pc'},
    spell68: {offset: 0x0CD4, size: 4, type: 'int', label: 'Spell 68', segment: 'pc'},
    spell69: {offset: 0x0CD8, size: 4, type: 'int', label: 'Spell 69', segment: 'pc'},
    spell70: {offset: 0x0CDC, size: 4, type: 'int', label: 'Spell 70', segment: 'pc'},
    spell71: {offset: 0x0CE0, size: 4, type: 'int', label: 'Spell 71', segment: 'pc'},
    spell72: {offset: 0x0CE4, size: 4, type: 'int', label: 'Spell 72', segment: 'pc'},
    spell73: {offset: 0x0CE8, size: 4, type: 'int', label: 'Spell 73', segment: 'pc'},
    spell74: {offset: 0x0CEC, size: 4, type: 'int', label: 'Spell 74', segment: 'pc'},
    spell75: {offset: 0x0CF0, size: 4, type: 'int', label: 'Spell 75', segment: 'pc'},
    spell76: {offset: 0x0CF4, size: 4, type: 'int', label: 'Spell 76', segment: 'pc'},
    spell77: {offset: 0x0CF8, size: 4, type: 'int', label: 'Spell 77', segment: 'pc'},
    spell78: {offset: 0x0CFC, size: 4, type: 'int', label: 'Spell 78', segment: 'pc'},
    spell79: {offset: 0x0D00, size: 4, type: 'int', label: 'Spell 79', segment: 'pc'},
    spell80: {offset: 0x0D04, size: 4, type: 'int', label: 'Spell 80', segment: 'pc'},
    spell81: {offset: 0x0D08, size: 4, type: 'int', label: 'Spell 81', segment: 'pc'},
    spell82: {offset: 0x0D0C, size: 4, type: 'int', label: 'Spell 82', segment: 'pc'},
    spell83: {offset: 0x0D10, size: 4, type: 'int', label: 'Spell 83', segment: 'pc'},
    spell84: {offset: 0x0D14, size: 4, type: 'int', label: 'Spell 84', segment: 'pc'},
    spell85: {offset: 0x0D18, size: 4, type: 'int', label: 'Spell 85', segment: 'pc'},
    spell86: {offset: 0x0D1C, size: 4, type: 'int', label: 'Spell 86', segment: 'pc'},
    spell87: {offset: 0x0D20, size: 4, type: 'int', label: 'Spell 87', segment: 'pc'},
    spell88: {offset: 0x0D24, size: 4, type: 'int', label: 'Spell 88', segment: 'pc'},
    spell89: {offset: 0x0D28, size: 4, type: 'int', label: 'Spell 89', segment: 'pc'},
    spell90: {offset: 0x0D2C, size: 4, type: 'int', label: 'Spell 90', segment: 'pc'},
    spell91: {offset: 0x0D30, size: 4, type: 'int', label: 'Spell 91', segment: 'pc'},
    spell92: {offset: 0x0D34, size: 4, type: 'int', label: 'Spell 92', segment: 'pc'},
    spell93: {offset: 0x0D38, size: 4, type: 'int', label: 'Spell 93', segment: 'pc'},
    spell94: {offset: 0x0D3C, size: 4, type: 'int', label: 'Spell 94', segment: 'pc'},
    spell95: {offset: 0x0D40, size: 4, type: 'int', label: 'Spell 95', segment: 'pc'},
    spell96: {offset: 0x0D44, size: 4, type: 'int', label: 'Spell 96', segment: 'pc'},
    spell97: {offset: 0x0D48, size: 4, type: 'int', label: 'Spell 97', segment: 'pc'},
    spell98: {offset: 0x0D4C, size: 4, type: 'int', label: 'Spell 98', segment: 'pc'},
    spell99: {offset: 0x0D50, size: 4, type: 'int', label: 'Spell 99', segment: 'pc'},
    spell100: {offset: 0x0D54, size: 4, type: 'int', label: 'Spell 100', segment: 'pc'},
    spell101: {offset: 0x0D58, size: 4, type: 'int', label: 'Spell 101', segment: 'pc'},
    // spell102: {offset: 0x0D5C, size: 4, type: 'int', label: 'Spell 102', segment: 'pc'},
    // spell103: {offset: 0x0D60, size: 4, type: 'int', label: 'Spell 103', segment: 'pc'},
    // spell104: {offset: 0x0D64, size: 4, type: 'int', label: 'Spell 104', segment: 'pc'},
    // spell105: {offset: 0x0D68, size: 4, type: 'int', label: 'Spell 105', segment: 'pc'},
    // spell106: {offset: 0x0D6C, size: 4, type: 'int', label: 'Spell 106', segment: 'pc'},
    // spell107: {offset: 0x0D70, size: 4, type: 'int', label: 'Spell 107', segment: 'pc'},
    // spell108: {offset: 0x0D74, size: 4, type: 'int', label: 'Spell 108', segment: 'pc'},
    // spell109: {offset: 0x0D78, size: 4, type: 'int', label: 'Spell 109', segment: 'pc'},
    // spell110: {offset: 0x0D7C, size: 4, type: 'int', label: 'Spell 110', segment: 'pc'},
    // spell111: {offset: 0x0D80, size: 4, type: 'int', label: 'Spell 111', segment: 'pc'},
    // spell112: {offset: 0x0D84, size: 4, type: 'int', label: 'Spell 112', segment: 'pc'},
    // spell113: {offset: 0x0D88, size: 4, type: 'int', label: 'Spell 113', segment: 'pc'},
    // spell114: {offset: 0x0D8C, size: 4, type: 'int', label: 'Spell 114', segment: 'pc'},
    // Known Spells Count
    knownFireSpells: {offset: 0x0E58, size: 4, type: 'int', label: 'Known Fire Spells', segment: 'pc'},
    knownWaterSpells: {offset: 0x0E5C, size: 4, type: 'int', label: 'Known Water Spells', segment: 'pc'},
    knownAirSpells: {offset: 0x0E60, size: 4, type: 'int', label: 'Known Air Spells', segment: 'pc'},
    knownEarthSpells: {offset: 0x0E64, size: 4, type: 'int', label: 'Known Earth Spells', segment: 'pc'},
    knownMentalSpells: {offset: 0x0E68, size: 4, type: 'int', label: 'Known Mental Spells', segment: 'pc'},
    knownDivineSpells: {offset: 0x0E6C, size: 4, type: 'int', label: 'Known Divine Spells', segment: 'pc'},
    strongestRealm: {offset: 0x0E78, size: 4, type: 'int', label: 'Strongest Realm', segment: 'pc'},
    // Initiative

    // Armor class

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

    // Equipped items

    // Carried items

    // Portal location
}

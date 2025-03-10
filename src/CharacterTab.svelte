<script>
    import Input from "./Input.svelte";
    const { hexEditor, chrIdx } = $$props
</script>
<div class="abilities-column">
    <fieldset style="width: 450px;">
        <legend>General</legend>
        <Input disabled={true} lblSize={90} inpSize={120} id={`nickname_${chrIdx}`} label={hexEditor?.getLabel('nickname')} value={hexEditor?.readCharValue('nickname', chrIdx)}/>
        <Input disabled={true} lblSize={90} inpSize={120} id={`name_${chrIdx}`} label={hexEditor?.getLabel('name')} value={hexEditor?.readCharValue('name', chrIdx)}/><br/>
        <Input lblSize={90} inpSize={120} id={`xp_${chrIdx}`} label={hexEditor?.getLabel('xp')} value={hexEditor?.readCharValue('xp', chrIdx)}/>
        <Input lblSize={90} inpSize={120} disabled={true} id={`xpNextLevel_${chrIdx}`} label={hexEditor?.getLabel('xpNextLevel')} value={hexEditor?.readCharValue('xpNextLevel', chrIdx)}/><br/>
        <Input lblSize={90} inpSize={120} id={`hpCurrent_${chrIdx}`} label={hexEditor?.getLabel('hpCurrent')} value={hexEditor?.readCharValue('hpCurrent', chrIdx)}/>
        <Input lblSize={90} inpSize={120} id={`hpMax_${chrIdx}`} label={hexEditor?.getLabel('hpMax')} value={hexEditor?.readCharValue('hpMax', chrIdx)}/><br/>
        <Input lblSize={90} inpSize={120} id={`staminaCurrent_${chrIdx}`} label={hexEditor?.getLabel('staminaCurrent')} value={hexEditor?.readCharValue('staminaCurrent', chrIdx)}/>
        <Input lblSize={90} inpSize={120} id={`staminaMax_${chrIdx}`} label={hexEditor?.getLabel('staminaMax')} value={hexEditor?.readCharValue('staminaMax', chrIdx)}/>
    </fieldset>
    <fieldset style="display: none;">
        <legend>Class Levels</legend>
        <!--<Input lblSize={80} inpSize={36} id={`level_${chrIdx}`} label={hexEditor?.getLabel('level')} value={hexEditor?.readCharValue('level', chrIdx)}/>-->
        <!--<Input lblSize={80} inpSize={36} id={`fighterLevel_${chrIdx}`} label={hexEditor?.getLabel('fighterLevel')} value={hexEditor?.readCharValue('fighterLevel', chrIdx)}/>-->
        <!--<Input lblSize={80} inpSize={36} id={`lordLevel_${chrIdx}`} label={hexEditor?.getLabel('lordLevel')} value={hexEditor?.readCharValue('lordLevel', chrIdx)}/>-->
        <!--<Input lblSize={80} inpSize={36} id={`valkyrieLevel_${chrIdx}`} label={hexEditor?.getLabel('valkyrieLevel')} value={hexEditor?.readCharValue('valkyrieLevel', chrIdx)}/>-->
        <!--<Input lblSize={80} inpSize={36} id={`rangerLevel_${chrIdx}`} label={hexEditor?.getLabel('rangerLevel')} value={hexEditor?.readCharValue('rangerLevel', chrIdx)}/>-->
        <!--<Input lblSize={80} inpSize={36} id={`samuraiLevel_${chrIdx}`} label={hexEditor?.getLabel('samuraiLevel')} value={hexEditor?.readCharValue('samuraiLevel', chrIdx)}/>-->
        <!--<Input lblSize={80} inpSize={36} id={`ninjaLevel_${chrIdx}`} label={hexEditor?.getLabel('ninjaLevel')} value={hexEditor?.readCharValue('ninjaLevel', chrIdx)}/>-->
        <!--<Input lblSize={80} inpSize={36} id={`monkLevel_${chrIdx}`} label={hexEditor?.getLabel('monkLevel')} value={hexEditor?.readCharValue('monkLevel', chrIdx)}/>-->
        <!--<Input lblSize={80} inpSize={36} id={`rogueLevel_${chrIdx}`} label={hexEditor?.getLabel('rogueLevel')} value={hexEditor?.readCharValue('rogueLevel', chrIdx)}/>-->
        <!--<Input lblSize={80} inpSize={36} id={`gadgeteerLevel_${chrIdx}`} label={hexEditor?.getLabel('gadgeteerLevel')} value={hexEditor?.readCharValue('gadgeteerLevel', chrIdx)}/>-->
        <!--<Input lblSize={80} inpSize={36} id={`bardLevel_${chrIdx}`} label={hexEditor?.getLabel('bardLevel')} value={hexEditor?.readCharValue('bardLevel', chrIdx)}/>-->
        <!--<Input lblSize={80} inpSize={36} id={`priestLevel_${chrIdx}`} label={hexEditor?.getLabel('priestLevel')} value={hexEditor?.readCharValue('priestLevel', chrIdx)}/>-->
        <!--<Input lblSize={80} inpSize={36} id={`alchemistLevel_${chrIdx}`} label={hexEditor?.getLabel('alchemistLevel')} value={hexEditor?.readCharValue('alchemistLevel', chrIdx)}/>-->
        <!--<Input lblSize={80} inpSize={36} id={`bishopLevel_${chrIdx}`} label={hexEditor?.getLabel('bishopLevel')} value={hexEditor?.readCharValue('bishopLevel', chrIdx)}/>-->
        <!--<Input lblSize={80} inpSize={36} id={`psionicLevel_${chrIdx}`} label={hexEditor?.getLabel('psionicLevel')} value={hexEditor?.readCharValue('psionicLevel', chrIdx)}/>-->
        <!--<Input lblSize={80} inpSize={36} id={`mageLevel_${chrIdx}`} label={hexEditor?.getLabel('mageLevel')} value={hexEditor?.readCharValue('mageLevel', chrIdx)}/>-->
    </fieldset>
    <fieldset>
        <legend>Attributes</legend>
        <Input lblSize={84} inpSize={36} id={`strength_${chrIdx}`} label={hexEditor?.getLabel('strength')} value={hexEditor?.readCharValue('strength', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`strengthMod_${chrIdx}`} label={hexEditor?.getLabel('strengthMod')} value={hexEditor?.readCharValue('strengthMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`intelligence_${chrIdx}`} label={hexEditor?.getLabel('intelligence')} value={hexEditor?.readCharValue('intelligence', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`intelligenceMod_${chrIdx}`} label={hexEditor?.getLabel('intelligenceMod')} value={hexEditor?.readCharValue('intelligenceMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`piety_${chrIdx}`} label={hexEditor?.getLabel('piety')} value={hexEditor?.readCharValue('piety', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`pietyMod_${chrIdx}`} label={hexEditor?.getLabel('pietyMod')} value={hexEditor?.readCharValue('pietyMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`vitality_${chrIdx}`} label={hexEditor?.getLabel('vitality')} value={hexEditor?.readCharValue('vitality', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`vitalityMod_${chrIdx}`} label={hexEditor?.getLabel('vitalityMod')} value={hexEditor?.readCharValue('vitalityMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`dexterity_${chrIdx}`} label={hexEditor?.getLabel('dexterity')} value={hexEditor?.readCharValue('dexterity', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`dexterityMod_${chrIdx}`} label={hexEditor?.getLabel('dexterityMod')} value={hexEditor?.readCharValue('dexterityMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`speed_${chrIdx}`} label={hexEditor?.getLabel('speed')} value={hexEditor?.readCharValue('speed', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`speedMod_${chrIdx}`} label={hexEditor?.getLabel('speedMod')} value={hexEditor?.readCharValue('speedMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`sense_${chrIdx}`} label={hexEditor?.getLabel('sense')} value={hexEditor?.readCharValue('sense', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`senseMod_${chrIdx}`} label={hexEditor?.getLabel('senseMod')} value={hexEditor?.readCharValue('senseMod', chrIdx)}/>-->
    </fieldset>
    <fieldset>
        <legend>Weapon Skills</legend>
        <Input lblSize={84} inpSize={36} id={`sword_${chrIdx}`} label={hexEditor?.getLabel('sword')} value={hexEditor?.readCharValue('sword', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`swordMod_${chrIdx}`} label={hexEditor?.getLabel('swordMod')} value={hexEditor?.readCharValue('swordMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`axe_${chrIdx}`} label={hexEditor?.getLabel('axe')} value={hexEditor?.readCharValue('axe', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`axeMod_${chrIdx}`} label={hexEditor?.getLabel('axeMod')} value={hexEditor?.readCharValue('axeMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`polearm_${chrIdx}`} label={hexEditor?.getLabel('polearm')} value={hexEditor?.readCharValue('polearm', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`polearmMod_${chrIdx}`} label={hexEditor?.getLabel('polearmMod')} value={hexEditor?.readCharValue('polearmMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`mace_${chrIdx}`} label={hexEditor?.getLabel('mace')} value={hexEditor?.readCharValue('mace', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`maceMod_${chrIdx}`} label={hexEditor?.getLabel('maceMod')} value={hexEditor?.readCharValue('maceMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`dagger_${chrIdx}`} label={hexEditor?.getLabel('dagger')} value={hexEditor?.readCharValue('dagger', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`daggerMod_${chrIdx}`} label={hexEditor?.getLabel('daggerMod')} value={hexEditor?.readCharValue('daggerMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`staff_${chrIdx}`} label={hexEditor?.getLabel('staff')} value={hexEditor?.readCharValue('staff', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`staffMod_${chrIdx}`} label={hexEditor?.getLabel('staffMod')} value={hexEditor?.readCharValue('staffMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`shield_${chrIdx}`} label={hexEditor?.getLabel('shield')} value={hexEditor?.readCharValue('shield', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`shieldMod_${chrIdx}`} label={hexEditor?.getLabel('shieldMod')} value={hexEditor?.readCharValue('shieldMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`modernWeapon_${chrIdx}`} label={hexEditor?.getLabel('modernWeapon')} value={hexEditor?.readCharValue('modernWeapon', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`modernWeaponMod_${chrIdx}`} label={hexEditor?.getLabel('modernWeaponMod')} value={hexEditor?.readCharValue('modernWeaponMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`bow_${chrIdx}`} label={hexEditor?.getLabel('bow')} value={hexEditor?.readCharValue('bow', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`bowMod_${chrIdx}`} label={hexEditor?.getLabel('bowMod')} value={hexEditor?.readCharValue('bowMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`throwSling_${chrIdx}`} label={hexEditor?.getLabel('throwSling')} value={hexEditor?.readCharValue('throwSling', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`throwSlingMod_${chrIdx}`} label={hexEditor?.getLabel('throwSlingMod')} value={hexEditor?.readCharValue('throwSlingMod', chrIdx)}/>-->
    </fieldset>
    <fieldset>
        <legend>Physical Skills</legend>
        <Input lblSize={84} inpSize={36} id={`lockTrap_${chrIdx}`} label={hexEditor?.getLabel('lockTrap')} value={hexEditor?.readCharValue('lockTrap', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`lockTrapMod_${chrIdx}`} label={hexEditor?.getLabel('lockTrapMod')} value={hexEditor?.readCharValue('lockTrapMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`stealth_${chrIdx}`} label={hexEditor?.getLabel('stealth')} value={hexEditor?.readCharValue('stealth', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`stealthMod_${chrIdx}`} label={hexEditor?.getLabel('stealthMod')} value={hexEditor?.readCharValue('stealthMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`music_${chrIdx}`} label={hexEditor?.getLabel('music')} value={hexEditor?.readCharValue('music', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`musicMod_${chrIdx}`} label={hexEditor?.getLabel('musicMod')} value={hexEditor?.readCharValue('musicMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`pickPocket_${chrIdx}`} label={hexEditor?.getLabel('pickPocket')} value={hexEditor?.readCharValue('pickPocket', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`pickPocketMod_${chrIdx}`} label={hexEditor?.getLabel('pickPocketMod')} value={hexEditor?.readCharValue('pickPocketMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`martialArt_${chrIdx}`} label={hexEditor?.getLabel('martialArt')} value={hexEditor?.readCharValue('martialArt', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`martialArtMod_${chrIdx}`} label={hexEditor?.getLabel('martialArtMod')} value={hexEditor?.readCharValue('martialArtMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`scouting_${chrIdx}`} label={hexEditor?.getLabel('scouting')} value={hexEditor?.readCharValue('scouting', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`scoutingMod_${chrIdx}`} label={hexEditor?.getLabel('scoutingMod')} value={hexEditor?.readCharValue('scoutingMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`closeCombat_${chrIdx}`} label={hexEditor?.getLabel('closeCombat')} value={hexEditor?.readCharValue('closeCombat', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`closeCombatMod_${chrIdx}`} label={hexEditor?.getLabel('closeCombatMod')} value={hexEditor?.readCharValue('closeCombatMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`rangeCombat_${chrIdx}`} label={hexEditor?.getLabel('rangeCombat')} value={hexEditor?.readCharValue('rangeCombat', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`rangeCombatMod_${chrIdx}`} label={hexEditor?.getLabel('rangeCombatMod')} value={hexEditor?.readCharValue('rangeCombatMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`dualWeapon_${chrIdx}`} label={hexEditor?.getLabel('dualWeapon')} value={hexEditor?.readCharValue('dualWeapon', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`dualWeaponMod_${chrIdx}`} label={hexEditor?.getLabel('dualWeaponMod')} value={hexEditor?.readCharValue('dualWeaponMod', chrIdx)}/>-->
    </fieldset>
    <fieldset>
        <legend>Academic Skills</legend>
        <Input lblSize={84} inpSize={36} id={`criticalStrike_${chrIdx}`} label={hexEditor?.getLabel('criticalStrike')} value={hexEditor?.readCharValue('criticalStrike', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`criticalStrikeMod_${chrIdx}`} label={hexEditor?.getLabel('criticalStrikeMod')} value={hexEditor?.readCharValue('criticalStrikeMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`artifact_${chrIdx}`} label={hexEditor?.getLabel('artifact')} value={hexEditor?.readCharValue('artifact', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`artifactMod_${chrIdx}`} label={hexEditor?.getLabel('artifactMod')} value={hexEditor?.readCharValue('artifactMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`mythology_${chrIdx}`} label={hexEditor?.getLabel('mythology')} value={hexEditor?.readCharValue('mythology', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`mythologyMod_${chrIdx}`} label={hexEditor?.getLabel('mythologyMod')} value={hexEditor?.readCharValue('mythologyMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`communication_${chrIdx}`} label={hexEditor?.getLabel('communication')} value={hexEditor?.readCharValue('communication', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`communicationMod_${chrIdx}`} label={hexEditor?.getLabel('communicationMod')} value={hexEditor?.readCharValue('communicationMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`engineering_${chrIdx}`} label={hexEditor?.getLabel('engineering')} value={hexEditor?.readCharValue('engineering', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`engineeringMod_${chrIdx}`} label={hexEditor?.getLabel('engineeringMod')} value={hexEditor?.readCharValue('engineeringMod', chrIdx)}/>-->
    </fieldset>
    <fieldset>
        <legend>Magic Skills</legend>
        <Input lblSize={84} inpSize={36} id={`wizardry_${chrIdx}`} label={hexEditor?.getLabel('wizardry')} value={hexEditor?.readCharValue('wizardry', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`wizardryMod_${chrIdx}`} label={hexEditor?.getLabel('wizardryMod')} value={hexEditor?.readCharValue('wizardryMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`divinity_${chrIdx}`} label={hexEditor?.getLabel('divinity')} value={hexEditor?.readCharValue('divinity', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`divinityMod_${chrIdx}`} label={hexEditor?.getLabel('divinityMod')} value={hexEditor?.readCharValue('divinityMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`alchemy_${chrIdx}`} label={hexEditor?.getLabel('alchemy')} value={hexEditor?.readCharValue('alchemy', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`alchemyMod_${chrIdx}`} label={hexEditor?.getLabel('alchemyMod')} value={hexEditor?.readCharValue('alchemyMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`psionics_${chrIdx}`} label={hexEditor?.getLabel('psionics')} value={hexEditor?.readCharValue('psionics', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`psionicsMod_${chrIdx}`} label={hexEditor?.getLabel('psionicsMod')} value={hexEditor?.readCharValue('psionicsMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`fireMagic_${chrIdx}`} label={hexEditor?.getLabel('fireMagic')} value={hexEditor?.readCharValue('fireMagic', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`fireMagicMod_${chrIdx}`} label={hexEditor?.getLabel('fireMagicMod')} value={hexEditor?.readCharValue('fireMagicMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`waterMagic_${chrIdx}`} label={hexEditor?.getLabel('waterMagic')} value={hexEditor?.readCharValue('waterMagic', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`waterMagicMod_${chrIdx}`} label={hexEditor?.getLabel('waterMagicMod')} value={hexEditor?.readCharValue('waterMagicMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`airMagic_${chrIdx}`} label={hexEditor?.getLabel('airMagic')} value={hexEditor?.readCharValue('airMagic', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`airMagicMod_${chrIdx}`} label={hexEditor?.getLabel('airMagicMod')} value={hexEditor?.readCharValue('airMagicMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`earthMagic_${chrIdx}`} label={hexEditor?.getLabel('earthMagic')} value={hexEditor?.readCharValue('earthMagic', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`earthMagicMod_${chrIdx}`} label={hexEditor?.getLabel('earthMagicMod')} value={hexEditor?.readCharValue('earthMagicMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`mentalMagic_${chrIdx}`} label={hexEditor?.getLabel('mentalMagic')} value={hexEditor?.readCharValue('mentalMagic', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`mentalMagicMod_${chrIdx}`} label={hexEditor?.getLabel('mentalMagicMod')} value={hexEditor?.readCharValue('mentalMagicMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`divineMagic_${chrIdx}`} label={hexEditor?.getLabel('divineMagic')} value={hexEditor?.readCharValue('divineMagic', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`divineMagicMod_${chrIdx}`} label={hexEditor?.getLabel('divineMagicMod')} value={hexEditor?.readCharValue('divineMagicMod', chrIdx)}/>-->
    </fieldset>
    <fieldset>
        <legend>Special Skills</legend>
        <Input lblSize={84} inpSize={36} id={`powerStrike_${chrIdx}`} label={hexEditor?.getLabel('powerStrike')} value={hexEditor?.readCharValue('powerStrike', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`powerStrikeMod_${chrIdx}`} label={hexEditor?.getLabel('powerStrikeMod')} value={hexEditor?.readCharValue('powerStrikeMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`powerCast_${chrIdx}`} label={hexEditor?.getLabel('powerCast')} value={hexEditor?.readCharValue('powerCast', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`powerCastMod_${chrIdx}`} label={hexEditor?.getLabel('powerCastMod')} value={hexEditor?.readCharValue('powerCastMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`ironWill_${chrIdx}`} label={hexEditor?.getLabel('ironWill')} value={hexEditor?.readCharValue('ironWill', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`ironWillMod_${chrIdx}`} label={hexEditor?.getLabel('ironWillMod')} value={hexEditor?.readCharValue('ironWillMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`ironSkin_${chrIdx}`} label={hexEditor?.getLabel('ironSkin')} value={hexEditor?.readCharValue('ironSkin', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`ironSkinMod_${chrIdx}`} label={hexEditor?.getLabel('ironSkinMod')} value={hexEditor?.readCharValue('ironSkinMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`reflextion_${chrIdx}`} label={hexEditor?.getLabel('reflextion')} value={hexEditor?.readCharValue('reflextion', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`reflextionMod_${chrIdx}`} label={hexEditor?.getLabel('reflextionMod')} value={hexEditor?.readCharValue('reflextionMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`snakeSpeed_${chrIdx}`} label={hexEditor?.getLabel('snakeSpeed')} value={hexEditor?.readCharValue('snakeSpeed', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`snakeSpeedMod_${chrIdx}`} label={hexEditor?.getLabel('snakeSpeedMod')} value={hexEditor?.readCharValue('snakeSpeedMod', chrIdx)}/>-->
        <Input lblSize={84} inpSize={36} id={`eagleEye_${chrIdx}`} label={hexEditor?.getLabel('eagleEye')} value={hexEditor?.readCharValue('eagleEye', chrIdx)}/>
        <!--<Input lblSize={84} inpSize={36} id={`eagleEyeMod_${chrIdx}`} label={hexEditor?.getLabel('eagleEyeMod')} value={hexEditor?.readCharValue('eagleEyeMod', chrIdx)}/>-->
    </fieldset>
    <fieldset style="display:none;">
        <legend>Spell Points</legend>
        <!--<Input lblSize={120} inpSize={36} id={`fireSpellMax_${chrIdx}`} label={hexEditor?.getLabel('fireSpellMax')} value={hexEditor?.readCharValue('fireSpellMax', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`fireSpellCurrent_${chrIdx}`} label={hexEditor?.getLabel('fireSpellCurrent')} value={hexEditor?.readCharValue('fireSpellCurrent', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`waterSpellMax_${chrIdx}`} label={hexEditor?.getLabel('waterSpellMax')} value={hexEditor?.readCharValue('waterSpellMax', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`waterSpellCurrent_${chrIdx}`} label={hexEditor?.getLabel('waterSpellCurrent')} value={hexEditor?.readCharValue('waterSpellCurrent', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`airSpellMax_${chrIdx}`} label={hexEditor?.getLabel('airSpellMax')} value={hexEditor?.readCharValue('airSpellMax', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`airSpellCurrent_${chrIdx}`} label={hexEditor?.getLabel('airSpellCurrent')} value={hexEditor?.readCharValue('airSpellCurrent', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`earthSpellMax_${chrIdx}`} label={hexEditor?.getLabel('earthSpellMax')} value={hexEditor?.readCharValue('earthSpellMax', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`earthSpellCurrent_${chrIdx}`} label={hexEditor?.getLabel('earthSpellCurrent')} value={hexEditor?.readCharValue('earthSpellCurrent', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`mentalSpellMax_${chrIdx}`} label={hexEditor?.getLabel('mentalSpellMax')} value={hexEditor?.readCharValue('mentalSpellMax', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`mentalSpellCurrent_${chrIdx}`} label={hexEditor?.getLabel('mentalSpellCurrent')} value={hexEditor?.readCharValue('mentalSpellCurrent', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`divineSpellMax_${chrIdx}`} label={hexEditor?.getLabel('divineSpellMax')} value={hexEditor?.readCharValue('divineSpellMax', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`divineSpellCurrent_${chrIdx}`} label={hexEditor?.getLabel('divineSpellCurrent')} value={hexEditor?.readCharValue('divineSpellCurrent', chrIdx)}/>-->
    </fieldset>
    <fieldset style="display:none;">
        <legend>Spell Resistance</legend>
        <!--<Input lblSize={120} inpSize={36} id={`spellResFire_${chrIdx}`} label={hexEditor?.getLabel('spellResFire')} value={hexEditor?.readCharValue('spellResFire', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`spellResFireMod_${chrIdx}`} label={hexEditor?.getLabel('spellResFireMod')} value={hexEditor?.readCharValue('spellResFireMod', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`spellResWater_${chrIdx}`} label={hexEditor?.getLabel('spellResWater')} value={hexEditor?.readCharValue('spellResWater', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`spellResWaterMod_${chrIdx}`} label={hexEditor?.getLabel('spellResWaterMod')} value={hexEditor?.readCharValue('spellResWaterMod', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`spellResAir_${chrIdx}`} label={hexEditor?.getLabel('spellResAir')} value={hexEditor?.readCharValue('spellResAir', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`spellResAirMod_${chrIdx}`} label={hexEditor?.getLabel('spellResAirMod')} value={hexEditor?.readCharValue('spellResAirMod', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`spellResEarth_${chrIdx}`} label={hexEditor?.getLabel('spellResEarth')} value={hexEditor?.readCharValue('spellResEarth', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`spellResEarthMod_${chrIdx}`} label={hexEditor?.getLabel('spellResEarthMod')} value={hexEditor?.readCharValue('spellResEarthMod', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`spellResMental_${chrIdx}`} label={hexEditor?.getLabel('spellResMental')} value={hexEditor?.readCharValue('spellResMental', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`spellResMentalMod_${chrIdx}`} label={hexEditor?.getLabel('spellResMentalMod')} value={hexEditor?.readCharValue('spellResMentalMod', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`spellResDivine_${chrIdx}`} label={hexEditor?.getLabel('spellResDivine')} value={hexEditor?.readCharValue('spellResDivine', chrIdx)}/>-->
        <!--<Input lblSize={120} inpSize={36} id={`spellResDivineMod_${chrIdx}`} label={hexEditor?.getLabel('spellResDivineMod')} value={hexEditor?.readCharValue('spellResDivineMod', chrIdx)}/>-->
    </fieldset>
</div>
<style>
    .abilities-column {
        display: block;
        float: left;
        padding: 4px 12px 0 12px;
    }

    fieldset {
        margin-top: 6px;
        padding-block-start: 0;
    }
</style>

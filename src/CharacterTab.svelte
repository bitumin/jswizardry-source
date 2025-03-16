<script>
    import Input from "./Input.svelte";
    import { spells } from "./data/spells";
    import ItemTd from "./ItemTd.svelte";
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
    <fieldset>
        <legend>Levels</legend>
        <Input lblSize={80} inpSize={36} id={`level_${chrIdx}`} label={hexEditor?.getLabel('level')} value={hexEditor?.readCharValue('level', chrIdx)}/>
        <Input lblSize={80} inpSize={36} id={`fighterLevel_${chrIdx}`} label={hexEditor?.getLabel('fighterLevel')} value={hexEditor?.readCharValue('fighterLevel', chrIdx)}/>
        <Input lblSize={80} inpSize={36} id={`lordLevel_${chrIdx}`} label={hexEditor?.getLabel('lordLevel')} value={hexEditor?.readCharValue('lordLevel', chrIdx)}/>
        <Input lblSize={80} inpSize={36} id={`valkyrieLevel_${chrIdx}`} label={hexEditor?.getLabel('valkyrieLevel')} value={hexEditor?.readCharValue('valkyrieLevel', chrIdx)}/>
        <Input lblSize={80} inpSize={36} id={`rangerLevel_${chrIdx}`} label={hexEditor?.getLabel('rangerLevel')} value={hexEditor?.readCharValue('rangerLevel', chrIdx)}/>
        <Input lblSize={80} inpSize={36} id={`samuraiLevel_${chrIdx}`} label={hexEditor?.getLabel('samuraiLevel')} value={hexEditor?.readCharValue('samuraiLevel', chrIdx)}/>
        <Input lblSize={80} inpSize={36} id={`ninjaLevel_${chrIdx}`} label={hexEditor?.getLabel('ninjaLevel')} value={hexEditor?.readCharValue('ninjaLevel', chrIdx)}/>
        <Input lblSize={80} inpSize={36} id={`monkLevel_${chrIdx}`} label={hexEditor?.getLabel('monkLevel')} value={hexEditor?.readCharValue('monkLevel', chrIdx)}/>
        <Input lblSize={80} inpSize={36} id={`rogueLevel_${chrIdx}`} label={hexEditor?.getLabel('rogueLevel')} value={hexEditor?.readCharValue('rogueLevel', chrIdx)}/>
        <Input lblSize={80} inpSize={36} id={`gadgeteerLevel_${chrIdx}`} label={hexEditor?.getLabel('gadgeteerLevel')} value={hexEditor?.readCharValue('gadgeteerLevel', chrIdx)}/>
        <Input lblSize={80} inpSize={36} id={`bardLevel_${chrIdx}`} label={hexEditor?.getLabel('bardLevel')} value={hexEditor?.readCharValue('bardLevel', chrIdx)}/>
        <Input lblSize={80} inpSize={36} id={`priestLevel_${chrIdx}`} label={hexEditor?.getLabel('priestLevel')} value={hexEditor?.readCharValue('priestLevel', chrIdx)}/>
        <Input lblSize={80} inpSize={36} id={`alchemistLevel_${chrIdx}`} label={hexEditor?.getLabel('alchemistLevel')} value={hexEditor?.readCharValue('alchemistLevel', chrIdx)}/>
        <Input lblSize={80} inpSize={36} id={`bishopLevel_${chrIdx}`} label={hexEditor?.getLabel('bishopLevel')} value={hexEditor?.readCharValue('bishopLevel', chrIdx)}/>
        <Input lblSize={80} inpSize={36} id={`psionicLevel_${chrIdx}`} label={hexEditor?.getLabel('psionicLevel')} value={hexEditor?.readCharValue('psionicLevel', chrIdx)}/>
        <Input lblSize={80} inpSize={36} id={`mageLevel_${chrIdx}`} label={hexEditor?.getLabel('mageLevel')} value={hexEditor?.readCharValue('mageLevel', chrIdx)}/>
    </fieldset>
    <fieldset>
        <legend>Attributes</legend>
        <Input lblSize={84} inpSize={36} id={`strength_${chrIdx}`} label={hexEditor?.getLabel('strength')} value={hexEditor?.readCharValue('strength', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`intelligence_${chrIdx}`} label={hexEditor?.getLabel('intelligence')} value={hexEditor?.readCharValue('intelligence', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`piety_${chrIdx}`} label={hexEditor?.getLabel('piety')} value={hexEditor?.readCharValue('piety', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`vitality_${chrIdx}`} label={hexEditor?.getLabel('vitality')} value={hexEditor?.readCharValue('vitality', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`dexterity_${chrIdx}`} label={hexEditor?.getLabel('dexterity')} value={hexEditor?.readCharValue('dexterity', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`speed_${chrIdx}`} label={hexEditor?.getLabel('speed')} value={hexEditor?.readCharValue('speed', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`sense_${chrIdx}`} label={hexEditor?.getLabel('sense')} value={hexEditor?.readCharValue('sense', chrIdx)}/>
    </fieldset>
    <fieldset>
        <legend>Weapon Skills</legend>
        <Input lblSize={84} inpSize={36} id={`sword_${chrIdx}`} label={hexEditor?.getLabel('sword')} value={hexEditor?.readCharValue('sword', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`axe_${chrIdx}`} label={hexEditor?.getLabel('axe')} value={hexEditor?.readCharValue('axe', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`polearm_${chrIdx}`} label={hexEditor?.getLabel('polearm')} value={hexEditor?.readCharValue('polearm', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`mace_${chrIdx}`} label={hexEditor?.getLabel('mace')} value={hexEditor?.readCharValue('mace', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`dagger_${chrIdx}`} label={hexEditor?.getLabel('dagger')} value={hexEditor?.readCharValue('dagger', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`staff_${chrIdx}`} label={hexEditor?.getLabel('staff')} value={hexEditor?.readCharValue('staff', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`shield_${chrIdx}`} label={hexEditor?.getLabel('shield')} value={hexEditor?.readCharValue('shield', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`modernWeapon_${chrIdx}`} label={hexEditor?.getLabel('modernWeapon')} value={hexEditor?.readCharValue('modernWeapon', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`bow_${chrIdx}`} label={hexEditor?.getLabel('bow')} value={hexEditor?.readCharValue('bow', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`throwSling_${chrIdx}`} label={hexEditor?.getLabel('throwSling')} value={hexEditor?.readCharValue('throwSling', chrIdx)}/>
    </fieldset>
    <fieldset>
        <legend>Physical Skills</legend>
        <Input lblSize={84} inpSize={36} id={`lockTrap_${chrIdx}`} label={hexEditor?.getLabel('lockTrap')} value={hexEditor?.readCharValue('lockTrap', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`stealth_${chrIdx}`} label={hexEditor?.getLabel('stealth')} value={hexEditor?.readCharValue('stealth', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`music_${chrIdx}`} label={hexEditor?.getLabel('music')} value={hexEditor?.readCharValue('music', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`pickPocket_${chrIdx}`} label={hexEditor?.getLabel('pickPocket')} value={hexEditor?.readCharValue('pickPocket', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`martialArt_${chrIdx}`} label={hexEditor?.getLabel('martialArt')} value={hexEditor?.readCharValue('martialArt', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`scouting_${chrIdx}`} label={hexEditor?.getLabel('scouting')} value={hexEditor?.readCharValue('scouting', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`closeCombat_${chrIdx}`} label={hexEditor?.getLabel('closeCombat')} value={hexEditor?.readCharValue('closeCombat', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`rangeCombat_${chrIdx}`} label={hexEditor?.getLabel('rangeCombat')} value={hexEditor?.readCharValue('rangeCombat', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`dualWeapon_${chrIdx}`} label={hexEditor?.getLabel('dualWeapon')} value={hexEditor?.readCharValue('dualWeapon', chrIdx)}/>
    </fieldset>
    <fieldset>
        <legend>Academic Skills</legend>
        <Input lblSize={84} inpSize={36} id={`criticalStrike_${chrIdx}`} label={hexEditor?.getLabel('criticalStrike')} value={hexEditor?.readCharValue('criticalStrike', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`artifact_${chrIdx}`} label={hexEditor?.getLabel('artifact')} value={hexEditor?.readCharValue('artifact', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`mythology_${chrIdx}`} label={hexEditor?.getLabel('mythology')} value={hexEditor?.readCharValue('mythology', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`communication_${chrIdx}`} label={hexEditor?.getLabel('communication')} value={hexEditor?.readCharValue('communication', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`engineering_${chrIdx}`} label={hexEditor?.getLabel('engineering')} value={hexEditor?.readCharValue('engineering', chrIdx)}/>
    </fieldset>
    <fieldset>
        <legend>Magic Skills</legend>
        <Input lblSize={84} inpSize={36} id={`wizardry_${chrIdx}`} label={hexEditor?.getLabel('wizardry')} value={hexEditor?.readCharValue('wizardry', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`divinity_${chrIdx}`} label={hexEditor?.getLabel('divinity')} value={hexEditor?.readCharValue('divinity', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`alchemy_${chrIdx}`} label={hexEditor?.getLabel('alchemy')} value={hexEditor?.readCharValue('alchemy', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`psionics_${chrIdx}`} label={hexEditor?.getLabel('psionics')} value={hexEditor?.readCharValue('psionics', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`fireMagic_${chrIdx}`} label={hexEditor?.getLabel('fireMagic')} value={hexEditor?.readCharValue('fireMagic', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`waterMagic_${chrIdx}`} label={hexEditor?.getLabel('waterMagic')} value={hexEditor?.readCharValue('waterMagic', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`airMagic_${chrIdx}`} label={hexEditor?.getLabel('airMagic')} value={hexEditor?.readCharValue('airMagic', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`earthMagic_${chrIdx}`} label={hexEditor?.getLabel('earthMagic')} value={hexEditor?.readCharValue('earthMagic', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`mentalMagic_${chrIdx}`} label={hexEditor?.getLabel('mentalMagic')} value={hexEditor?.readCharValue('mentalMagic', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`divineMagic_${chrIdx}`} label={hexEditor?.getLabel('divineMagic')} value={hexEditor?.readCharValue('divineMagic', chrIdx)}/>
    </fieldset>
    <fieldset>
        <legend>Special Skills</legend>
        <Input lblSize={84} inpSize={36} id={`powerStrike_${chrIdx}`} label={hexEditor?.getLabel('powerStrike')} value={hexEditor?.readCharValue('powerStrike', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`powerCast_${chrIdx}`} label={hexEditor?.getLabel('powerCast')} value={hexEditor?.readCharValue('powerCast', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`ironWill_${chrIdx}`} label={hexEditor?.getLabel('ironWill')} value={hexEditor?.readCharValue('ironWill', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`ironSkin_${chrIdx}`} label={hexEditor?.getLabel('ironSkin')} value={hexEditor?.readCharValue('ironSkin', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`reflextion_${chrIdx}`} label={hexEditor?.getLabel('reflextion')} value={hexEditor?.readCharValue('reflextion', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`snakeSpeed_${chrIdx}`} label={hexEditor?.getLabel('snakeSpeed')} value={hexEditor?.readCharValue('snakeSpeed', chrIdx)}/>
        <Input lblSize={84} inpSize={36} id={`eagleEye_${chrIdx}`} label={hexEditor?.getLabel('eagleEye')} value={hexEditor?.readCharValue('eagleEye', chrIdx)}/>
    </fieldset>
    <fieldset>
        <legend>Spell Resistance</legend>
        <Input lblSize={120} inpSize={36} id={`spellResFire_${chrIdx}`} label={hexEditor?.getLabel('spellResFire')} value={hexEditor?.readCharValue('spellResFire', chrIdx)}/>
        <Input lblSize={120} inpSize={36} id={`spellResWater_${chrIdx}`} label={hexEditor?.getLabel('spellResWater')} value={hexEditor?.readCharValue('spellResWater', chrIdx)}/>
        <Input lblSize={120} inpSize={36} id={`spellResAir_${chrIdx}`} label={hexEditor?.getLabel('spellResAir')} value={hexEditor?.readCharValue('spellResAir', chrIdx)}/>
        <Input lblSize={120} inpSize={36} id={`spellResEarth_${chrIdx}`} label={hexEditor?.getLabel('spellResEarth')} value={hexEditor?.readCharValue('spellResEarth', chrIdx)}/>
        <Input lblSize={120} inpSize={36} id={`spellResMental_${chrIdx}`} label={hexEditor?.getLabel('spellResMental')} value={hexEditor?.readCharValue('spellResMental', chrIdx)}/>
        <Input lblSize={120} inpSize={36} id={`spellResDivine_${chrIdx}`} label={hexEditor?.getLabel('spellResDivine')} value={hexEditor?.readCharValue('spellResDivine', chrIdx)}/>
    </fieldset>
    <fieldset>
        <legend>Known Spells</legend>
        {#each Array(hexEditor?.spellsCount).fill(null).map((_, i) => i) as idx}
            {#if idx < 101 || idx > 112}
                <Input lblSize={110} id={`spell${idx+1}_${chrIdx}`} label={spells[idx+1] ?? hexEditor?.getLabel(`spell${idx+1}`)} value={hexEditor?.readCharValue(`spell${idx+1}`, chrIdx)}/>
            {/if}
        {/each}
    </fieldset>
    <fieldset class="char-items equipped">
        <legend>Equipped Items</legend>
        <table>
            <thead>
            <tr>
                <th></th>
                <th>ID</th>
                <th>Quantity</th>
                <th>Charges</th>
                <th>Identified</th>
                <th>Flag 1</th>
                <th>Flag 2</th>
                <th>Flag 3</th>
                <th>Uncursed</th>
                <th>Flag 4</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Head</td>
                <ItemTd idx={0} id={`equippedHeadId_${chrIdx}`} value={hexEditor?.readCharValue('equippedHeadId', chrIdx)}/>
                <ItemTd idx={0} id={`equippedHeadCount_${chrIdx}`} value={hexEditor?.readCharValue('equippedHeadCount', chrIdx)}/>
                <ItemTd idx={0} id={`equippedHeadCharges_${chrIdx}`} value={hexEditor?.readCharValue('equippedHeadCharges', chrIdx)}/>
                <ItemTd idx={0} id={`equippedHeadIsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('equippedHeadIsIdentified', chrIdx)}/>
                <ItemTd idx={0} id={`equippedHeadFlag1_${chrIdx}`} value={hexEditor?.readCharValue('equippedHeadFlag1', chrIdx)}/>
                <ItemTd idx={0} id={`equippedHeadFlag2_${chrIdx}`} value={hexEditor?.readCharValue('equippedHeadFlag2', chrIdx)}/>
                <ItemTd idx={0} id={`equippedHeadFlag3_${chrIdx}`} value={hexEditor?.readCharValue('equippedHeadFlag3', chrIdx)}/>
                <ItemTd idx={0} id={`equippedHeadIsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('equippedHeadIsUncursed', chrIdx)}/>
                <ItemTd idx={0} id={`equippedHeadFlag4_${chrIdx}`} value={hexEditor?.readCharValue('equippedHeadFlag4', chrIdx)}/>
            </tr>
            <tr>
                <td>Misc1</td>
                <ItemTd idx={1} id={`equippedMisc1Id_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc1Id', chrIdx)}/>
                <ItemTd idx={1} id={`equippedMisc1Count_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc1Count', chrIdx)}/>
                <ItemTd idx={1} id={`equippedMisc1Charges_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc1Charges', chrIdx)}/>
                <ItemTd idx={1} id={`equippedMisc1IsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc1IsIdentified', chrIdx)}/>
                <ItemTd idx={1} id={`equippedMisc1Flag1_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc1Flag1', chrIdx)}/>
                <ItemTd idx={1} id={`equippedMisc1Flag2_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc1Flag2', chrIdx)}/>
                <ItemTd idx={1} id={`equippedMisc1Flag3_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc1Flag3', chrIdx)}/>
                <ItemTd idx={1} id={`equippedMisc1IsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc1IsUncursed', chrIdx)}/>
                <ItemTd idx={1} id={`equippedMisc1Flag4_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc1Flag4', chrIdx)}/>
            </tr>
            <tr>
                <td>Misc2</td>
                <ItemTd idx={0} id={`equippedMisc2Id_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc2Id', chrIdx)}/>
                <ItemTd idx={0} id={`equippedMisc2Count_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc2Count', chrIdx)}/>
                <ItemTd idx={0} id={`equippedMisc2Charges_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc2Charges', chrIdx)}/>
                <ItemTd idx={0} id={`equippedMisc2IsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc2IsIdentified', chrIdx)}/>
                <ItemTd idx={0} id={`equippedMisc2Flag1_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc2Flag1', chrIdx)}/>
                <ItemTd idx={0} id={`equippedMisc2Flag2_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc2Flag2', chrIdx)}/>
                <ItemTd idx={0} id={`equippedMisc2Flag3_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc2Flag3', chrIdx)}/>
                <ItemTd idx={0} id={`equippedMisc2IsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc2IsUncursed', chrIdx)}/>
                <ItemTd idx={0} id={`equippedMisc2Flag4_${chrIdx}`} value={hexEditor?.readCharValue('equippedMisc2Flag4', chrIdx)}/>
            </tr>
            <tr>
                <td>Cloak</td>
                <ItemTd idx={1} id={`equippedCloakId_${chrIdx}`} value={hexEditor?.readCharValue('equippedCloakId', chrIdx)}/>
                <ItemTd idx={1} id={`equippedCloakCount_${chrIdx}`} value={hexEditor?.readCharValue('equippedCloakCount', chrIdx)}/>
                <ItemTd idx={1} id={`equippedCloakCharges_${chrIdx}`} value={hexEditor?.readCharValue('equippedCloakCharges', chrIdx)}/>
                <ItemTd idx={1} id={`equippedCloakIsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('equippedCloakIsIdentified', chrIdx)}/>
                <ItemTd idx={1} id={`equippedCloakFlag1_${chrIdx}`} value={hexEditor?.readCharValue('equippedCloakFlag1', chrIdx)}/>
                <ItemTd idx={1} id={`equippedCloakFlag2_${chrIdx}`} value={hexEditor?.readCharValue('equippedCloakFlag2', chrIdx)}/>
                <ItemTd idx={1} id={`equippedCloakFlag3_${chrIdx}`} value={hexEditor?.readCharValue('equippedCloakFlag3', chrIdx)}/>
                <ItemTd idx={1} id={`equippedCloakIsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('equippedCloakIsUncursed', chrIdx)}/>
                <ItemTd idx={1} id={`equippedCloakFlag4_${chrIdx}`} value={hexEditor?.readCharValue('equippedCloakFlag4', chrIdx)}/>
            </tr>
            <tr>
                <td>Torso</td>
                <ItemTd idx={0} id={`equippedTorsoId_${chrIdx}`} value={hexEditor?.readCharValue('equippedTorsoId', chrIdx)}/>
                <ItemTd idx={0} id={`equippedTorsoCount_${chrIdx}`} value={hexEditor?.readCharValue('equippedTorsoCount', chrIdx)}/>
                <ItemTd idx={0} id={`equippedTorsoCharges_${chrIdx}`} value={hexEditor?.readCharValue('equippedTorsoCharges', chrIdx)}/>
                <ItemTd idx={0} id={`equippedTorsoIsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('equippedTorsoIsIdentified', chrIdx)}/>
                <ItemTd idx={0} id={`equippedTorsoFlag1_${chrIdx}`} value={hexEditor?.readCharValue('equippedTorsoFlag1', chrIdx)}/>
                <ItemTd idx={0} id={`equippedTorsoFlag2_${chrIdx}`} value={hexEditor?.readCharValue('equippedTorsoFlag2', chrIdx)}/>
                <ItemTd idx={0} id={`equippedTorsoFlag3_${chrIdx}`} value={hexEditor?.readCharValue('equippedTorsoFlag3', chrIdx)}/>
                <ItemTd idx={0} id={`equippedTorsoIsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('equippedTorsoIsUncursed', chrIdx)}/>
                <ItemTd idx={0} id={`equippedTorsoFlag4_${chrIdx}`} value={hexEditor?.readCharValue('equippedTorsoFlag4', chrIdx)}/>
            </tr>
            <tr>
                <td>Hands</td>
                <ItemTd idx={1} id={`equippedHandsId_${chrIdx}`} value={hexEditor?.readCharValue('equippedHandsId', chrIdx)}/>
                <ItemTd idx={1} id={`equippedHandsCount_${chrIdx}`} value={hexEditor?.readCharValue('equippedHandsCount', chrIdx)}/>
                <ItemTd idx={1} id={`equippedHandsCharges_${chrIdx}`} value={hexEditor?.readCharValue('equippedHandsCharges', chrIdx)}/>
                <ItemTd idx={1} id={`equippedHandsIsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('equippedHandsIsIdentified', chrIdx)}/>
                <ItemTd idx={1} id={`equippedHandsFlag1_${chrIdx}`} value={hexEditor?.readCharValue('equippedHandsFlag1', chrIdx)}/>
                <ItemTd idx={1} id={`equippedHandsFlag2_${chrIdx}`} value={hexEditor?.readCharValue('equippedHandsFlag2', chrIdx)}/>
                <ItemTd idx={1} id={`equippedHandsFlag3_${chrIdx}`} value={hexEditor?.readCharValue('equippedHandsFlag3', chrIdx)}/>
                <ItemTd idx={1} id={`equippedHandsIsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('equippedHandsIsUncursed', chrIdx)}/>
                <ItemTd idx={1} id={`equippedHandsFlag4_${chrIdx}`} value={hexEditor?.readCharValue('equippedHandsFlag4', chrIdx)}/>
            </tr>
            <tr>
                <td>Weapon1A</td>
                <ItemTd idx={0} id={`equippedWeapon1AId_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1AId', chrIdx)}/>
                <ItemTd idx={0} id={`equippedWeapon1ACount_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1ACount', chrIdx)}/>
                <ItemTd idx={0} id={`equippedWeapon1ACharges_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1ACharges', chrIdx)}/>
                <ItemTd idx={0} id={`equippedWeapon1AIsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1AIsIdentified', chrIdx)}/>
                <ItemTd idx={0} id={`equippedWeapon1AFlag1_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1AFlag1', chrIdx)}/>
                <ItemTd idx={0} id={`equippedWeapon1AFlag2_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1AFlag2', chrIdx)}/>
                <ItemTd idx={0} id={`equippedWeapon1AFlag3_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1AFlag3', chrIdx)}/>
                <ItemTd idx={0} id={`equippedWeapon1AIsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1AIsUncursed', chrIdx)}/>
                <ItemTd idx={0} id={`equippedWeapon1AFlag4_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1AFlag4', chrIdx)}/>
            </tr>
            <tr>
                <td>Weapon1B</td>
                <ItemTd idx={1} id={`equippedWeapon1BId_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1BId', chrIdx)}/>
                <ItemTd idx={1} id={`equippedWeapon1BCount_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1BCount', chrIdx)}/>
                <ItemTd idx={1} id={`equippedWeapon1BCharges_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1BCharges', chrIdx)}/>
                <ItemTd idx={1} id={`equippedWeapon1BIsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1BIsIdentified', chrIdx)}/>
                <ItemTd idx={1} id={`equippedWeapon1BFlag1_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1BFlag1', chrIdx)}/>
                <ItemTd idx={1} id={`equippedWeapon1BFlag2_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1BFlag2', chrIdx)}/>
                <ItemTd idx={1} id={`equippedWeapon1BFlag3_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1BFlag3', chrIdx)}/>
                <ItemTd idx={1} id={`equippedWeapon1BIsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1BIsUncursed', chrIdx)}/>
                <ItemTd idx={1} id={`equippedWeapon1BFlag4_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon1BFlag4', chrIdx)}/>
            </tr>
            <tr>
                <td>Weapon2A</td>
                <ItemTd idx={0} id={`equippedWeapon2AId_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2AId', chrIdx)}/>
                <ItemTd idx={0} id={`equippedWeapon2ACount_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2ACount', chrIdx)}/>
                <ItemTd idx={0} id={`equippedWeapon2ACharges_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2ACharges', chrIdx)}/>
                <ItemTd idx={0} id={`equippedWeapon2AIsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2AIsIdentified', chrIdx)}/>
                <ItemTd idx={0} id={`equippedWeapon2AFlag1_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2AFlag1', chrIdx)}/>
                <ItemTd idx={0} id={`equippedWeapon2AFlag2_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2AFlag2', chrIdx)}/>
                <ItemTd idx={0} id={`equippedWeapon2AFlag3_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2AFlag3', chrIdx)}/>
                <ItemTd idx={0} id={`equippedWeapon2AIsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2AIsUncursed', chrIdx)}/>
                <ItemTd idx={0} id={`equippedWeapon2AFlag4_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2AFlag4', chrIdx)}/>
            </tr>
            <tr>
                <td>Weapon2B</td>
                <ItemTd idx={1} id={`equippedWeapon2BId_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2BId', chrIdx)}/>
                <ItemTd idx={1} id={`equippedWeapon2BCount_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2BCount', chrIdx)}/>
                <ItemTd idx={1} id={`equippedWeapon2BCharges_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2BCharges', chrIdx)}/>
                <ItemTd idx={1} id={`equippedWeapon2BIsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2BIsIdentified', chrIdx)}/>
                <ItemTd idx={1} id={`equippedWeapon2BFlag1_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2BFlag1', chrIdx)}/>
                <ItemTd idx={1} id={`equippedWeapon2BFlag2_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2BFlag2', chrIdx)}/>
                <ItemTd idx={1} id={`equippedWeapon2BFlag3_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2BFlag3', chrIdx)}/>
                <ItemTd idx={1} id={`equippedWeapon2BIsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2BIsUncursed', chrIdx)}/>
                <ItemTd idx={1} id={`equippedWeapon2BFlag4_${chrIdx}`} value={hexEditor?.readCharValue('equippedWeapon2BFlag4', chrIdx)}/>
            </tr>
            <tr>
                <td>Legs</td>
                <ItemTd idx={0} id={`equippedLegsId_${chrIdx}`} value={hexEditor?.readCharValue('equippedLegsId', chrIdx)}/>
                <ItemTd idx={0} id={`equippedLegsCount_${chrIdx}`} value={hexEditor?.readCharValue('equippedLegsCount', chrIdx)}/>
                <ItemTd idx={0} id={`equippedLegsCharges_${chrIdx}`} value={hexEditor?.readCharValue('equippedLegsCharges', chrIdx)}/>
                <ItemTd idx={0} id={`equippedLegsIsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('equippedLegsIsIdentified', chrIdx)}/>
                <ItemTd idx={0} id={`equippedLegsFlag1_${chrIdx}`} value={hexEditor?.readCharValue('equippedLegsFlag1', chrIdx)}/>
                <ItemTd idx={0} id={`equippedLegsFlag2_${chrIdx}`} value={hexEditor?.readCharValue('equippedLegsFlag2', chrIdx)}/>
                <ItemTd idx={0} id={`equippedLegsFlag3_${chrIdx}`} value={hexEditor?.readCharValue('equippedLegsFlag3', chrIdx)}/>
                <ItemTd idx={0} id={`equippedLegsIsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('equippedLegsIsUncursed', chrIdx)}/>
                <ItemTd idx={0} id={`equippedLegsFlag4_${chrIdx}`} value={hexEditor?.readCharValue('equippedLegsFlag4', chrIdx)}/>
            </tr>
            <tr>
                <td>Feet</td>
                <ItemTd idx={1} id={`equippedFeetId_${chrIdx}`} value={hexEditor?.readCharValue('equippedFeetId', chrIdx)}/>
                <ItemTd idx={1} id={`equippedFeetCount_${chrIdx}`} value={hexEditor?.readCharValue('equippedFeetCount', chrIdx)}/>
                <ItemTd idx={1} id={`equippedFeetCharges_${chrIdx}`} value={hexEditor?.readCharValue('equippedFeetCharges', chrIdx)}/>
                <ItemTd idx={1} id={`equippedFeetIsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('equippedFeetIsIdentified', chrIdx)}/>
                <ItemTd idx={1} id={`equippedFeetFlag1_${chrIdx}`} value={hexEditor?.readCharValue('equippedFeetFlag1', chrIdx)}/>
                <ItemTd idx={1} id={`equippedFeetFlag2_${chrIdx}`} value={hexEditor?.readCharValue('equippedFeetFlag2', chrIdx)}/>
                <ItemTd idx={1} id={`equippedFeetFlag3_${chrIdx}`} value={hexEditor?.readCharValue('equippedFeetFlag3', chrIdx)}/>
                <ItemTd idx={1} id={`equippedFeetIsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('equippedFeetIsUncursed', chrIdx)}/>
                <ItemTd idx={1} id={`equippedFeetFlag4_${chrIdx}`} value={hexEditor?.readCharValue('equippedFeetFlag4', chrIdx)}/>
            </tr>
            </tbody>
        </table>
    </fieldset>
    <fieldset class="char-items carried">
        <legend>Carried Items</legend>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Quantity</th>
                <th>Charges</th>
                <th>Identified</th>
                <th>Flag 1</th>
                <th>Flag 2</th>
                <th>Flag 3</th>
                <th>Uncursed</th>
                <th>Flag 4</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <ItemTd idx={0} id={`carried1Id_${chrIdx}`} value={hexEditor?.readCharValue('carried1Id', chrIdx)}/>
                <ItemTd idx={0} id={`carried1Count_${chrIdx}`} value={hexEditor?.readCharValue('carried1Count', chrIdx)}/>
                <ItemTd idx={0} id={`carried1Charges_${chrIdx}`} value={hexEditor?.readCharValue('carried1Charges', chrIdx)}/>
                <ItemTd idx={0} id={`carried1IsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('carried1IsIdentified', chrIdx)}/>
                <ItemTd idx={0} id={`carried1Flag1_${chrIdx}`} value={hexEditor?.readCharValue('carried1Flag1', chrIdx)}/>
                <ItemTd idx={0} id={`carried1Flag2_${chrIdx}`} value={hexEditor?.readCharValue('carried1Flag2', chrIdx)}/>
                <ItemTd idx={0} id={`carried1Flag3_${chrIdx}`} value={hexEditor?.readCharValue('carried1Flag3', chrIdx)}/>
                <ItemTd idx={0} id={`carried1IsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('carried1IsUncursed', chrIdx)}/>
                <ItemTd idx={0} id={`carried1Flag4_${chrIdx}`} value={hexEditor?.readCharValue('carried1Flag4', chrIdx)}/>
            </tr>
            <tr>
                <ItemTd idx={1} id={`carried2Id_${chrIdx}`} value={hexEditor?.readCharValue('carried2Id', chrIdx)}/>
                <ItemTd idx={1} id={`carried2Count_${chrIdx}`} value={hexEditor?.readCharValue('carried2Count', chrIdx)}/>
                <ItemTd idx={1} id={`carried2Charges_${chrIdx}`} value={hexEditor?.readCharValue('carried2Charges', chrIdx)}/>
                <ItemTd idx={1} id={`carried2IsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('carried2IsIdentified', chrIdx)}/>
                <ItemTd idx={1} id={`carried2Flag1_${chrIdx}`} value={hexEditor?.readCharValue('carried2Flag1', chrIdx)}/>
                <ItemTd idx={1} id={`carried2Flag2_${chrIdx}`} value={hexEditor?.readCharValue('carried2Flag2', chrIdx)}/>
                <ItemTd idx={1} id={`carried2Flag3_${chrIdx}`} value={hexEditor?.readCharValue('carried2Flag3', chrIdx)}/>
                <ItemTd idx={1} id={`carried2IsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('carried2IsUncursed', chrIdx)}/>
                <ItemTd idx={1} id={`carried2Flag4_${chrIdx}`} value={hexEditor?.readCharValue('carried2Flag4', chrIdx)}/>
            </tr>
            <tr>
                <ItemTd idx={0} id={`carried3Id_${chrIdx}`} value={hexEditor?.readCharValue('carried3Id', chrIdx)}/>
                <ItemTd idx={0} id={`carried3Count_${chrIdx}`} value={hexEditor?.readCharValue('carried3Count', chrIdx)}/>
                <ItemTd idx={0} id={`carried3Charges_${chrIdx}`} value={hexEditor?.readCharValue('carried3Charges', chrIdx)}/>
                <ItemTd idx={0} id={`carried3IsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('carried3IsIdentified', chrIdx)}/>
                <ItemTd idx={0} id={`carried3Flag1_${chrIdx}`} value={hexEditor?.readCharValue('carried3Flag1', chrIdx)}/>
                <ItemTd idx={0} id={`carried3Flag2_${chrIdx}`} value={hexEditor?.readCharValue('carried3Flag2', chrIdx)}/>
                <ItemTd idx={0} id={`carried3Flag3_${chrIdx}`} value={hexEditor?.readCharValue('carried3Flag3', chrIdx)}/>
                <ItemTd idx={0} id={`carried3IsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('carried3IsUncursed', chrIdx)}/>
                <ItemTd idx={0} id={`carried3Flag4_${chrIdx}`} value={hexEditor?.readCharValue('carried3Flag4', chrIdx)}/>
            </tr>
            <tr>
                <ItemTd idx={1} id={`carried4Id_${chrIdx}`} value={hexEditor?.readCharValue('carried4Id', chrIdx)}/>
                <ItemTd idx={1} id={`carried4Count_${chrIdx}`} value={hexEditor?.readCharValue('carried4Count', chrIdx)}/>
                <ItemTd idx={1} id={`carried4Charges_${chrIdx}`} value={hexEditor?.readCharValue('carried4Charges', chrIdx)}/>
                <ItemTd idx={1} id={`carried4IsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('carried4IsIdentified', chrIdx)}/>
                <ItemTd idx={1} id={`carried4Flag1_${chrIdx}`} value={hexEditor?.readCharValue('carried4Flag1', chrIdx)}/>
                <ItemTd idx={1} id={`carried4Flag2_${chrIdx}`} value={hexEditor?.readCharValue('carried4Flag2', chrIdx)}/>
                <ItemTd idx={1} id={`carried4Flag3_${chrIdx}`} value={hexEditor?.readCharValue('carried4Flag3', chrIdx)}/>
                <ItemTd idx={1} id={`carried4IsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('carried4IsUncursed', chrIdx)}/>
                <ItemTd idx={1} id={`carried4Flag4_${chrIdx}`} value={hexEditor?.readCharValue('carried4Flag4', chrIdx)}/>
            </tr>
            <tr>
                <ItemTd idx={0} id={`carried5Id_${chrIdx}`} value={hexEditor?.readCharValue('carried5Id', chrIdx)}/>
                <ItemTd idx={0} id={`carried5Count_${chrIdx}`} value={hexEditor?.readCharValue('carried5Count', chrIdx)}/>
                <ItemTd idx={0} id={`carried5Charges_${chrIdx}`} value={hexEditor?.readCharValue('carried5Charges', chrIdx)}/>
                <ItemTd idx={0} id={`carried5IsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('carried5IsIdentified', chrIdx)}/>
                <ItemTd idx={0} id={`carried5Flag1_${chrIdx}`} value={hexEditor?.readCharValue('carried5Flag1', chrIdx)}/>
                <ItemTd idx={0} id={`carried5Flag2_${chrIdx}`} value={hexEditor?.readCharValue('carried5Flag2', chrIdx)}/>
                <ItemTd idx={0} id={`carried5Flag3_${chrIdx}`} value={hexEditor?.readCharValue('carried5Flag3', chrIdx)}/>
                <ItemTd idx={0} id={`carried5IsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('carried5IsUncursed', chrIdx)}/>
                <ItemTd idx={0} id={`carried5Flag4_${chrIdx}`} value={hexEditor?.readCharValue('carried5Flag4', chrIdx)}/>
            </tr>
            <tr>
                <ItemTd idx={1} id={`carried6Id_${chrIdx}`} value={hexEditor?.readCharValue('carried6Id', chrIdx)}/>
                <ItemTd idx={1} id={`carried6Count_${chrIdx}`} value={hexEditor?.readCharValue('carried6Count', chrIdx)}/>
                <ItemTd idx={1} id={`carried6Charges_${chrIdx}`} value={hexEditor?.readCharValue('carried6Charges', chrIdx)}/>
                <ItemTd idx={1} id={`carried6IsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('carried6IsIdentified', chrIdx)}/>
                <ItemTd idx={1} id={`carried6Flag1_${chrIdx}`} value={hexEditor?.readCharValue('carried6Flag1', chrIdx)}/>
                <ItemTd idx={1} id={`carried6Flag2_${chrIdx}`} value={hexEditor?.readCharValue('carried6Flag2', chrIdx)}/>
                <ItemTd idx={1} id={`carried6Flag3_${chrIdx}`} value={hexEditor?.readCharValue('carried6Flag3', chrIdx)}/>
                <ItemTd idx={1} id={`carried6IsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('carried6IsUncursed', chrIdx)}/>
                <ItemTd idx={1} id={`carried6Flag4_${chrIdx}`} value={hexEditor?.readCharValue('carried6Flag4', chrIdx)}/>
            </tr>
            <tr>
                <ItemTd idx={0} id={`carried7Id_${chrIdx}`} value={hexEditor?.readCharValue('carried7Id', chrIdx)}/>
                <ItemTd idx={0} id={`carried7Count_${chrIdx}`} value={hexEditor?.readCharValue('carried7Count', chrIdx)}/>
                <ItemTd idx={0} id={`carried7Charges_${chrIdx}`} value={hexEditor?.readCharValue('carried7Charges', chrIdx)}/>
                <ItemTd idx={0} id={`carried7IsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('carried7IsIdentified', chrIdx)}/>
                <ItemTd idx={0} id={`carried7Flag1_${chrIdx}`} value={hexEditor?.readCharValue('carried7Flag1', chrIdx)}/>
                <ItemTd idx={0} id={`carried7Flag2_${chrIdx}`} value={hexEditor?.readCharValue('carried7Flag2', chrIdx)}/>
                <ItemTd idx={0} id={`carried7Flag3_${chrIdx}`} value={hexEditor?.readCharValue('carried7Flag3', chrIdx)}/>
                <ItemTd idx={0} id={`carried7IsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('carried7IsUncursed', chrIdx)}/>
                <ItemTd idx={0} id={`carried7Flag4_${chrIdx}`} value={hexEditor?.readCharValue('carried7Flag4', chrIdx)}/>
            </tr>
            <tr>
                <ItemTd idx={1} id={`carried8Id_${chrIdx}`} value={hexEditor?.readCharValue('carried8Id', chrIdx)}/>
                <ItemTd idx={1} id={`carried8Count_${chrIdx}`} value={hexEditor?.readCharValue('carried8Count', chrIdx)}/>
                <ItemTd idx={1} id={`carried8Charges_${chrIdx}`} value={hexEditor?.readCharValue('carried8Charges', chrIdx)}/>
                <ItemTd idx={1} id={`carried8IsIdentified_${chrIdx}`} value={hexEditor?.readCharValue('carried8IsIdentified', chrIdx)}/>
                <ItemTd idx={1} id={`carried8Flag1_${chrIdx}`} value={hexEditor?.readCharValue('carried8Flag1', chrIdx)}/>
                <ItemTd idx={1} id={`carried8Flag2_${chrIdx}`} value={hexEditor?.readCharValue('carried8Flag2', chrIdx)}/>
                <ItemTd idx={1} id={`carried8Flag3_${chrIdx}`} value={hexEditor?.readCharValue('carried8Flag3', chrIdx)}/>
                <ItemTd idx={1} id={`carried8IsUncursed_${chrIdx}`} value={hexEditor?.readCharValue('carried8IsUncursed', chrIdx)}/>
                <ItemTd idx={1} id={`carried8Flag4_${chrIdx}`} value={hexEditor?.readCharValue('carried8Flag4', chrIdx)}/>
            </tr>
            </tbody>
        </table>
    </fieldset>
</div>
<style>
    .abilities-column {
        display: block;
        float: left;
        padding: 4px 12px 0 12px;
        overflow-y: scroll;
        height: 649px;
        max-height: 659px;
    }

    fieldset {
        margin-top: 6px;
        padding-block-start: 0;
    }

    .char-items {
        padding-bottom: 0;
        float: left;
        width: 676px;
    }

    .char-items.equipped {
        height: 282px;
    }

    .char-items.carried {
        height: 202px;
        margin-bottom: 16px;
    }

    .char-items legend {
        margin-bottom: 6px;
    }

    .char-items table {
        width: 100%;
        background-color: silver;
    }

    .char-items thead {
        position: sticky;
    }

    .char-items.equipped thead > tr > th:first-child {
        visibility: hidden;
        padding: 0;
    }

    .char-items.equipped tbody > tr > td:first-child {
        background-color: silver;
        padding: 0;
    }
</style>

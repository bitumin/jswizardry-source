<script>
    import Input from "./Input.svelte";
    import { spells } from "./data/spells";
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
    <fieldset style="margin-bottom: 6px;">
        <legend>Known Spells</legend>
        {#each Array(hexEditor?.spellsCount).fill(null).map((_, i) => i) as idx}
            {#if idx < 101 || idx > 112}
                <Input lblSize={110} id={`spell${idx+1}_${chrIdx}`} label={spells[idx+1] ?? hexEditor?.getLabel(`spell${idx+1}`)} value={hexEditor?.readCharValue(`spell${idx+1}`, chrIdx)}/>
            {/if}
        {/each}
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
</style>

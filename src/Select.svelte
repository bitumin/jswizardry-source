<script>
    export let id
    export let label
    export let value
    export let options
    export let lblSize = 60
    export let slcSize = 110
    const { disabled } = $$props
</script>
<div class="field-row">
    <label style={`min-width: ${lblSize}px`} for={id}>{label}</label>
    <select style={`width: ${slcSize}px`} id={id} name={id} value={value} {disabled}>
        {#each Object.entries(options) as [key, label]}
            <option value={key}>{label}</option>
        {/each}
    </select>
</div>
<style>
    .field-row {
        display: inline-flex;
        margin-top: 6px;
        margin-right: 6px;
    }

    select:focus {
        color: black;
        background-color: white;
    }
</style>

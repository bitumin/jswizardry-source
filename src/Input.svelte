<script>
    export let id
    export let label
    export let value
    export let lblSize = 60
    export let inpSize = 32
    const { disabled } = $$props
</script>
<div class="field-row">
    <label style={`min-width: ${lblSize}px`} for={id}>{label}</label>
    <input style={`width: ${inpSize}px`} id={id} name={id} type="text" value="{value}" {disabled} />
</div>
<style>
    .field-row {
        display: inline-flex;
        margin-top: 6px;
        margin-right: 6px;
    }
</style>

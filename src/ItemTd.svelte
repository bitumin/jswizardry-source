<script>
    import {items} from "./data/items"

    export let id
    export let idx
    export let value
</script>
<td contenteditable="true"
    bind:textContent={value}
    style={`background-color: ${idx % 2 === 0 ? '#eee' : '#fff'};`}
    title={items[value] ?? 'Item not found'}/>
<input type="hidden" id={id} name={id} value="{value}" />
<style>
    td {
        padding: 3px;
    }
</style>

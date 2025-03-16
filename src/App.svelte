<script>
    import {onMount} from "svelte";
    import {WizardrySavHexEditor} from "./lib/WizardrySavHexEditor";
    import {items} from "./data/items";
    import Input from "./Input.svelte";
    import CharacterTab from "./CharacterTab.svelte";
    import ItemTd from "./ItemTd.svelte";

    export let version;

    let fileInput
    let submitButton
    let filename
    let isReady = false
    let isLoading = false
    let hexEditor
    let activeTab = 0
    let downloadLink

    onMount(async () => {
        const file = localStorage.getItem('file')
        if (file === null) {
            return
        }

        isLoading = true

        const uint8array = JSON.parse(file);
        hexEditor = new WizardrySavHexEditor(uint8array);

        if (hexEditor.isValidRiffFile) {
            filename = localStorage.getItem('filename')
            if (null !== localStorage.getItem('activeTab')) {
                activeTab = parseInt(localStorage.getItem('activeTab'), 10)
            }

            isReady = true
        } else {
            localStorage.removeItem('file');
            localStorage.removeItem('filename')

            isReady = false
        }
        isLoading = false
    });

    const onFileSelected = (e) => {
        if (!e.target.files || !e.target.files[0]) { // No file selected
            isReady = hexEditor && hexEditor.isValidRiffFile // Check if we still have a valid file loaded
            return
        }

        isReady = false
        isLoading = true

        const inputFileName = e.target.files[0].name

        const reader = new FileReader()
        reader.readAsArrayBuffer(e.target.files[0])

        reader.onload = e => {
            let res = [];
            let uint8array = new Uint8Array(e.target.result);
            for (let i in uint8array) {
                res.push((0 + uint8array[i].toString(16)).slice(-2));
            }

            hexEditor = new WizardrySavHexEditor(uint8array);
            if (hexEditor.isValidRiffFile) {
                localStorage.setItem('file', JSON.stringify(res))
                localStorage.setItem('filename', inputFileName)
                localStorage.setItem('activeTab', 0)

                filename = inputFileName
                activeTab = 0

                isReady = true
            } else {
                localStorage.removeItem('file')
                localStorage.removeItem('filename')
                localStorage.removeItem('activeTab')

                isReady = false
            }
            isLoading = false
        }
    }

    const onTabClick = (tabIdx) => {
        activeTab = tabIdx
        localStorage.setItem('activeTab', tabIdx)
    }

    const onSaveChanges = (e) => {
        const formData = new FormData(e.target)
        for (const [fieldName, fieldValue] of formData.entries()) {
            const [fieldId, idx] = fieldName.split('_')
            hexEditor.writeValue(fieldValue, fieldId, parseInt(idx))
        }
        const blob = new Blob([hexEditor.exportAsInt8Array()], {type: 'application/octet-stream'});

        downloadLink.download = filename
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.click()
    }
</script>

<main>
    <a href="#download" style="display: none;" download bind:this={downloadLink}>Download</a>
    <div class="window-container" style="">
        <div class="window outer-window">
            <div class="title-bar">
                <div class="title-bar-text"><span class="logo"></span> JS Wizardry Keeper - Version {version}</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div class="toolbar">
                <button disabled>File</button>
                <button disabled>Edit</button>
                <button disabled>View</button>
                <button disabled>Tools</button>
                <button disabled>Settings</button>
                <button disabled>Window</button>
                <button disabled>Help</button>
            </div>
            <div class="toolbar-separator"></div>
            <div class="toolbar icons-toolbar">
                <input style="display: none;" type="file" accept=".SAV" on:change={(e) => onFileSelected(e)} bind:this={fileInput}>
                <button id="file-button" class="open-button" on:click={() => {fileInput?.click()}}></button>
                <button class="save-button" on:click={() => {submitButton?.click()}}></button>
            </div>
            <div class="window-body">
                <div class="outer-inner-window-container inner-window-container">
                    {#if isReady}
                        <div class="window inner-window">
                            <div class="title-bar">
                                <div class="title-bar-text"><span class="logo"></span> {filename}</div>
                                <div class="title-bar-controls">
                                    <button aria-label="Minimize"></button>
                                    <button aria-label="Maximize"></button>
                                    <button aria-label="Close"></button>
                                </div>
                            </div>
                            <div class="window-body">
                                <div class="inner-window-container inner-inner-window-container">
                                    <form action="#" on:submit|preventDefault={onSaveChanges}>
                                    <div class="character-window">
                                        <div class="tabs-column">
                                            <div class="tabs">
                                                <div role="tab" tabindex={0} class="tab" class:active={activeTab === 0} on:click={() => onTabClick(0)} on:keydown={()=>{}}>Party</div>
                                                {#each Array(hexEditor?.readPartyValue('totalPartyCount') - hexEditor?.readPartyValue('createdPartyCount')).fill(null).map((_, i) => i) as idx}
                                                    <div role="tab" tabindex={idx + 1} class="tab" class:active={activeTab === idx + 1} on:click={() => onTabClick(idx + 1)} on:keydown={()=>{}}>RPC {(idx + 1)}</div>
                                                {/each}
                                                {#each Array(hexEditor?.readPartyValue('createdPartyCount')).fill(null).map((_, i) => i) as idx}
                                                    <div role="tab" tabindex={idx + 3} class="tab" class:active={activeTab === idx + 3} on:click={() => onTabClick(idx + 3)} on:keydown={()=>{}}>PC {(idx + 1)}</div>
                                                {/each}
                                            </div>
                                            <div class="tab-contents">
                                                <div class="tab-content" class:active={activeTab === 0}>
                                                    <div class="abilities-column">
                                                        <fieldset>
                                                            <legend>General</legend>
                                                            <Input inpSize={110} lblSize={120} id="gold" label={hexEditor?.getLabel('gold')} value={hexEditor?.readPartyValue('gold')}/>
                                                        </fieldset>
                                                        <fieldset>
                                                            <legend>Variables</legend>
                                                            <Input inpSize={50} lblSize={120} disabled={true} id="header" label={hexEditor?.getLabel('header')} value={hexEditor?.readValue('header')}/>
                                                            <Input inpSize={50} lblSize={120} disabled={true} id="recruitedPartyCount" label="RPCs in Party" value={hexEditor?.readPartyValue('totalPartyCount') - hexEditor?.readPartyValue('createdPartyCount')}/>
                                                            <Input inpSize={50} lblSize={120} disabled={true} id="createdPartyCount" label={hexEditor?.getLabel('createdPartyCount')} value={hexEditor?.readPartyValue('createdPartyCount')}/>
                                                            <Input inpSize={50} lblSize={120} disabled={true} id="totalPartyCount" label={hexEditor?.getLabel('totalPartyCount')} value={hexEditor?.readPartyValue('totalPartyCount')}/>
                                                            <Input inpSize={50} lblSize={120} disabled={true} id="selectedCharIdx" label={hexEditor?.getLabel('selectedCharIdx')} value={hexEditor?.readPartyValue('selectedCharIdx')}/>
                                                            <Input inpSize={50} lblSize={120} disabled={true} id="partyItemsCount" label={hexEditor?.getLabel('partyItemsCount')} value={hexEditor?.readPartyValue('partyItemsCount')}/>
                                                        </fieldset>
                                                        {#if (hexEditor?.readPartyValue('partyItemsCount')) > 0}
                                                        <fieldset class="party-items">
                                                            <legend>Party Items</legend>
                                                            <table>
                                                                <thead>
                                                                <tr>
                                                                    <th>#</th>
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
                                                                {#each Array(hexEditor?.readPartyValue('partyItemsCount')).fill(null).map((_, i) => i) as idx}
                                                                    <tr>
                                                                        <td style={`width: 20px;background-color: ${idx % 2 === 0 ? '#eee' : '#fff'};`}>{idx+1}</td>
                                                                        <ItemTd idx={idx} id={`itemId_${idx}`} value={hexEditor?.readPartyItemValue('itemId', idx)}/>
                                                                        <ItemTd idx={idx} id={`itemCount_${idx}`} value={hexEditor?.readPartyItemValue('itemCount', idx)}/>
                                                                        <ItemTd idx={idx} id={`itemCharges_${idx}`} value={hexEditor?.readPartyItemValue('itemCharges', idx)}/>
                                                                        <ItemTd idx={idx} id={`itemIsIdentified_${idx}`} value={hexEditor?.readPartyItemValue('itemIsIdentified', idx)}/>
                                                                        <ItemTd idx={idx} id={`itemFlag1_${idx}`} value={hexEditor?.readPartyItemValue('itemFlag1', idx)}/>
                                                                        <ItemTd idx={idx} id={`itemFlag2_${idx}`} value={hexEditor?.readPartyItemValue('itemFlag2', idx)}/>
                                                                        <ItemTd idx={idx} id={`itemFlag3_${idx}`} value={hexEditor?.readPartyItemValue('itemFlag3', idx)}/>
                                                                        <ItemTd idx={idx} id={`itemIsUncursed_${idx}`} value={hexEditor?.readPartyItemValue('itemIsUncursed', idx)}/>
                                                                        <ItemTd idx={idx} id={`itemFlag4_${idx}`} value={hexEditor?.readPartyItemValue('itemFlag4', idx)}/>
                                                                    </tr>
                                                                {/each}
                                                                </tbody>
                                                            </table>
                                                        </fieldset>
                                                        <fieldset class="item-ids">
                                                            <legend>Item IDs</legend>
                                                            {#each Array(Object.keys(items).length).fill(null).map((_, i) => i) as idx}
                                                                <p>{idx} - {Object.values(items)[idx]}</p>
                                                            {/each}
                                                        </fieldset>
                                                        {/if}
                                                    </div>
                                                </div>
                                                {#each Array(hexEditor?.readPartyValue('totalPartyCount') - hexEditor?.readPartyValue('createdPartyCount')).fill(null).map((_, i) => i) as idx}
                                                    <div class="tab-content" class:active={activeTab === idx + 1}>
                                                        <CharacterTab hexEditor={hexEditor} chrIdx={idx}/>
                                                    </div>
                                                {/each}
                                                {#each Array(hexEditor?.readPartyValue('createdPartyCount')).fill(null).map((_, i) => i) as idx}
                                                    <div class="tab-content" class:active={activeTab === idx + 3}>
                                                        <CharacterTab hexEditor={hexEditor} chrIdx={idx + 2}/>
                                                    </div>
                                                {/each}
                                            </div>
                                        </div>
                                    </div>
                                    <button style="display: none;" type="submit" bind:this={submitButton}></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
            <div class="status-bar">
                <div class="status">
                    {#if isLoading}Loading...{:else if isReady}Ready{:else}&nbsp;{/if}
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    .title-bar {
        position: relative;
    }

    .title-bar-text {
        padding-left: 22px;
    }

    .window-container {
        width: 100%;
        text-align: center;
    }

    .logo {
        display: inline-block;
        height: 20px;
        width: 20px;
        background-image: url('/favicon.png');
        background-position: center center;
        background-size: 20px 20px;
        position: absolute;
        top: 0;
        left: 2px;
    }

    .outer-window {
        width: 800px;
        height: 826px;
        display: inline-block;
    }

    .toolbar {
        text-align: left;
        padding-left: 4px;
    }

    .window-body {
        margin: 0;
    }

    .toolbar > button {
        display: inline-block;
        padding: 0 5px;
        box-shadow: none;
        min-width: unset;
    }

    .inner-window-container {
        box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;
        display: block;
        margin: 0;
        padding: 2px 2px;
    }

    .outer-inner-window-container {
        background: #808080;
        height: 732px;
        text-align: left;
    }

    .inner-window {
        width: 770px;
        height: 720px;
        display: inline-block;
    }

    .inner-inner-window-container {
        height: 695px;
    }

    .status {
        min-height: 23px;
        line-height: 23px;
        padding-left: 4px;
    }

    .character-window {
        padding-top: 8px;
        padding-left: 8px;
    }

    .tabs-column {
        display: block;
        float: left;
        height: 787px;
        margin-left: 8px;
        width: 740px;
    }

    .tabs {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: flex-start;
        justify-content: flex-start;
        align-items: flex-end;
    }

    .tab-contents {
        margin-top: -4px;
        box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf;
        background-color: silver;
        height: 654px;
    }

    .tab {
        position: relative;
        display: inline-block;
        padding: 5px 8px 7px 8px;
        box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf;
        border-radius: 3px 2px 0 0;
        background-color: silver;
        clip-path: inset(0 0 2px 0);
        cursor: default;
        height: 10px;
        margin-left: -2px;
        margin-bottom: 2px;
    }

    .tab:first-child {
        margin-left: 0;
    }

    .tab.active {
        height: 14px;
        margin-bottom: 0;
        z-index: 1;
    }

    .tab-content {
        display: none;
        width: 100%;
        height: 100%;
    }

    .tab-content.active {
        display: block;
    }

    .abilities-column {
        display: block;
        float: left;
        padding: 4px 12px 0 12px;
    }

    .toolbar-separator {
        box-shadow: inset -1px -1px #fff, inset 0 1px grey, inset 1px -2px grey, inset 2px 2px #fff;
        clip-path: inset(0 2px 2px 2px);
        height: 5px;
    }

    .icons-toolbar {
        height: 21px;
    }

    .icons-toolbar button {
        margin-right: 2px;
    }

    .open-button {
        float: left;
        height: 24px;
        width: 23px;
        padding: 0 !important;
        background-image: url(/open.png);
        background-position: center center;
        background-size: contain;
        margin-top: -3px;
    }

    .save-button {
        float: left;
        height: 24px;
        width: 23px;
        padding: 0 !important;
        background-image: url(/save.png);
        background-position: center center;
        background-size: contain;
        margin-top: -3px;
    }

    fieldset {
        margin-top: 6px;
        padding-block-start: 0;
    }

    .party-items {
        height: 488px;
        max-height: 488px;
        overflow-y: scroll;
        padding-right: 0;
        padding-bottom: 0;
        width: 500px;
        float: left;
        margin-right: 8px;
    }

    .party-items legend {
        margin-bottom: 6px;
    }

    .party-items table {
        width: 100%;
    }

    .party-items thead {
        position: sticky;
    }

    .item-ids {
        width: 170px;
        height: 478px;
        max-height: 478px;
        overflow-y: scroll;
    }
</style>

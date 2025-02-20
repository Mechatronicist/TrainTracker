<script lang=ts>
import Select from 'svelte-select';
import type { Stop } from "$lib/stop_api.ts";
import { page } from "$app/state";

let selected = $state<Stop>()
    
let { items, stopName }: { items: Stop[] | null , stopName: string | undefined } = $props();

const itemId = 'stop_id';
const label = 'stop_name';

function handleSubmit() {
    if (selected)
        window.location.href = page.url.origin + "/stop/" + selected.stop_id
    
}
</script>

<style>
    .dropdown {
        min-width: 500px;
    }

    .dropdown form {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }
</style>

<div class="dropdown">
    <form onsubmit={handleSubmit}>
        <Select id="stops" {itemId} {label} {items} bind:value={selected} placeholder={stopName}></Select>
        <input type="submit" class=""/>
    </form>
</div>
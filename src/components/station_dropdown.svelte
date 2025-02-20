<script lang=ts>
import Select from 'svelte-select';
import type { Stop } from "$lib/timetable.ts";
import { page } from "$app/state";

let selected = $state<Stop>()
    
let { items }: { items: Stop[] | null } = $props();

const itemId = 'stop_id';
const label = 'stop_name';

function handleSubmit() {
    console.log(selected)
    if (selected)
        window.location.href = page.url + "stop/" + selected.stop_id
    
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
    <form on:submit|preventDefault={handleSubmit}>
        <Select id="stops" {itemId} {label} {items} bind:value={selected}></Select>
        <input type="submit" class=""/>
    </form>
</div>
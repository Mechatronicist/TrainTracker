<script lang="ts">
    import { getDeparturesAsync, type Departure } from "$lib/api";

    let { stopId } = $props();

    let isLoading = $state(true);
    let hasError = $state(false);
    let error = $state('');

    let departureData = $state<Departure[]>();

    getDeparturesAsync(stopId).then(result => {
        if(result == null) {
            hasError = true;
            error = "Failed to load departure data.";
            isLoading = false;

            return;
        }

        departureData = result;
    });
</script>

{#if isLoading}
<div>Loading timetable..</div>
{:else}
{#if hasError}
<div>{error}</div>
{:else}
<table>
    <thead>
        <tr>
            <th>
                Platform Number
            </th>

            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    </thead>

    <tbody>
        {#if departureData}
            {#each departureData as departure}
            <tr>
                <td>Platform {departure.platform_number}</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
            </tr>
            {/each}
        {/if}
    </tbody>
</table>
{/if}
{/if}

<style>
    table {
        border: 1px solid black;

        border-collapse: collapse;
    }

    table thead tr {
        border: 1px solid black;
        text-align: left;
    }

    table thead tr th {
        padding: 0.5rem;
    }

    table tbody tr td {
        padding: 0.5rem;
        border: 1px solid black;
    }
</style>
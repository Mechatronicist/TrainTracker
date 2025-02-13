<script lang="ts">
    import { getDepartures, type Departure } from "$lib/timetable";

    let { stopId }: { stopId: number | string} = $props();

    let hasError = $state(false);
    let error = $state('');

    let isLoading = $state(true);
    let departures = $state<Record<string, Departure[]>>();

    getDepartures(stopId).then(result => {
        if(result == null) {
            isLoading = false;
            hasError = true;
            error = "Failed to load departures.";
            return;
        }

        departures = result;
        isLoading = false;
    });
</script>


{#if isLoading}
<div>Loading data..</div>
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
        {#if departures}
            {#each Object.keys(departures) as platformNumber}
            <tr>
                <td>Platform {platformNumber}</td>
                <td>{departures[platformNumber][0]?.scheduled_departure_utc}</td>
                <td>{departures[platformNumber][1]?.scheduled_departure_utc}</td>
                <td>{departures[platformNumber][2]?.scheduled_departure_utc}</td>
                <td>{departures[platformNumber][3]?.scheduled_departure_utc}</td>
                <td>{departures[platformNumber][4]?.scheduled_departure_utc}</td>
            </tr>
            {/each}
        {/if}
    </tbody>
</table>
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
{/if}
<script lang="ts">
    import { getDepartures, type Departure } from "$lib/timetable";
    import routes from "$lib/routes.json";
    import { type Route } from "$lib/route";

    let allroutes = routes as Route[];

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

    function getDirectionName(route_id: number, direction_id: number): string {
        let route = allroutes.find(r => r.direction_id == direction_id && r.route_id == route_id);
        return route ? route.direction_name : "Unknown";
    }
</script>


{#if isLoading}
<div class="loading">Loading station departures..</div>
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
                {#each { length: 5 }, index}
                    <td>
                    {getDirectionName(departures[platformNumber][index].route_id, departures[platformNumber][index].direction_id)}
                    - 
                    {new Date(departures[platformNumber][index]?.scheduled_departure_utc).toLocaleTimeString()}
                    </td>
                {/each}
            </tr>
            {/each}
        {/if}
    </tbody>
</table>
{/if}

<style>
    table {
        border-collapse: collapse;

        background: rgb(249 249 249);
        box-shadow: #a9a9a9 1px 1px 3px;
    }

    table thead tr {
        border: 1px solid #e1e1e1;
        text-align: left;
    }

    table thead tr th {
        padding: 0.5rem;
    }

    table tbody tr td {
        padding: 1rem;
        border: 1px solid #e1e1e1;
    }

    .loading {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
{/if}
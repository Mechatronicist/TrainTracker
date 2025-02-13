<script lang="ts">
    import type { Departure } from "$lib/api";

    let { departures }: { departures: Departure[] | null } = $props();

    console.log(departures);
</script>

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
            {#each departures as departure}
                {#if departure.platform_number}
                <tr>
                    <td>Platform {departure.platform_number}</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                </tr>
                {/if}
            {/each}
        {/if}
    </tbody>
</table>
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
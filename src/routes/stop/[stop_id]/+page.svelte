<script lang="ts">
    import Header from '../../../components/Header.svelte';
    import TimeTable from '../../../components/TimeTable.svelte';

    export let data;
</script>

<div class="container">
    <Header weather={data.weather} stops={data.stops}></Header>
    <TimeTable stopId={data.stopId} ></TimeTable>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;

        gap: 0.5rem;
    }
</style>
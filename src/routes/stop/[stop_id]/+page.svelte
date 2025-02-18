<script lang="ts">
    import Header from '../../../components/Header.svelte';
    import TimeTable from '../../../components/TimeTable.svelte';

    export let data;
</script>

<Header weather={data.weather}></Header>
<TimeTable stopId={data.stopId} ></TimeTable>
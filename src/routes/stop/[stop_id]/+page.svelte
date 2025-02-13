<script lang="ts">
    import TimeTable from '../../../components/TimeTable.svelte';

    export let data;
</script>

<TimeTable departures={data.departures} ></TimeTable>
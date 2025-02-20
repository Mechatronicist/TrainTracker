<script lang=ts>
    import Dropdown from "../components/station_dropdown.svelte";
	export let data;
</script>

<div class="container">
    <div class="dropdown-container">
        <h1>Train Tracker</h1>
        <div>Select a station to view time table</div>
        <Dropdown items={data.Stops} stopName={undefined}/>
    </div>
</div>

<style>
.container {
    flex: 1;
    display: flex;

    align-items: center;
    justify-content: center;
}
.dropdown-container {
    display: flex;
    flex-direction: column;
}
.dropdown-container h1 {
    text-align: center;
}
</style>
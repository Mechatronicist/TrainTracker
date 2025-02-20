<script lang=ts>
    import Dropdown from "../components/station_dropdown.svelte";
	export let data;
</script>

<Dropdown items={data.Stops} stopName={undefined}/>
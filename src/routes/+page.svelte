<script lang=ts>
	import Header from "../components/Header.svelte";
	export let data
</script>

<Header weather={data.Weather} stops={data.Stops}> </Header>


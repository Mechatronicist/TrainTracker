<script lang=ts>
    import type { Current } from "$lib/weather_api";

    function weathermatrix(w: Current | null): String {
        if (!w) return "";
        const { temp_c: t, precip_mm: p, cloud: c } = w;
        console.log('t', t, 'p', p, 'c', c, 'weather time:', w.last_updated_epoch)
        const emoji =
            c > 75 ? (p > 0 ? "🌧️" : "☁️") :
            c > 50 && p === 0 ? "⛅" :
            c > 25 ? (p > 0 ? "🌦️" : "🌤️") :
            p > 0 ? "☔" : "☀️";
        return `${t} °c ${emoji}`
    }

    let { weather }: { weather: Current | null } = $props();
    let weather_condition = $state(new String)
    weather_condition = weathermatrix(weather)
    

    //----------------------------------------------
    function parseTime(dt: Date): String {
        return dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    }

	let time = $state(new String);
    time = parseTime(new Date())

    //----------------------------------------------
    import { onMount } from 'svelte';

	onMount(() => {
		const interval = setInterval(() => {
            time = parseTime(new Date())
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        color: #000000;
        font-weight: bold;
        font-size: 1.5em;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
    }
</style>

<div class="header">
    <span>{time}</span>
    <span>Richmond Station</span>
    <span>{weather_condition}</span>
</div>
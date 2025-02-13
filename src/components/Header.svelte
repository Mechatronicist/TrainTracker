<script>
	import { onMount } from 'svelte';

	let time = $state(new String);
	onMount(() => {
		const interval = setInterval(() => {
            let dt = new Date()
            let hours = dt.getHours()
            let meridiem = "am"
            if (hours > 12)
                hours -= 12
                meridiem = "pm"
			time = (hours.toString() + ":" + dt.getMinutes().toString() + ":" + dt.getSeconds().toString() + meridiem);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

    let weather = "weather"
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
        background: rgba(0, 0, 0, 0.1);
    }
</style>

<div class="header">
    <span>{time}</span>
    <span>Richmond Station</span>
    <span>{weather}</span>
</div>
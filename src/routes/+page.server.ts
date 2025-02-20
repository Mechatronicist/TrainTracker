import { getWeatherAsync } from "$lib/weather_api.js";
import { getStopsAsync } from "$lib/stop_api.js";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ }) => {
    let stops = await getStopsAsync()
    let weather = await getWeatherAsync()
    console.log(stops)
    return {
        Weather: weather,
        Stops: stops
    }
}

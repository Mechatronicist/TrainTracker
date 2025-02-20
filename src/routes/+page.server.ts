import { getWeatherAsync } from "$lib/weather_api.js";
import { getStopsAsync } from "$lib/timetable.js";
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
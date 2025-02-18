import { getWeatherAsync } from "$lib/weather_api.js";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ }) => {
    let weather = await getWeatherAsync()
    return {
        weather
    }
}
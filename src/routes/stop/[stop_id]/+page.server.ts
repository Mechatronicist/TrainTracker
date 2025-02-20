import { getStopsAsync } from "$lib/stop_api";
import { getWeatherAsync } from "$lib/weather_api";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    let { stop_id } = params;
    let stops = await getStopsAsync();
    let coords = await getCoordsAsync()
    let weather = await getWeatherAsync();

    return {
        weather: weather,
        stops: stops,
        stopId: stop_id
    }
}
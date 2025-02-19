import { getWeatherAsync } from "$lib/weather_api";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    let { stop_id } = params;
    
    let weather = await getWeatherAsync();

    return {
        weather: weather,
        stopId: stop_id
    }
}
import { getStopsAsync } from "$lib/stop_api";
import { getWeatherAsync } from "$lib/weather_api";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    let { stop_id } = params;
    let stops = await getStopsAsync();
    const stop = stops?.find(s => s.stop_id === Number(stop_id))
    console.log(stop)
    let weather = await getWeatherAsync(stop?.stop_latitude, stop?.stop_longitude);
    
    return {
        weather: weather,
        stops: stops,
        stopId: stop_id,
        stopName: stop?.stop_name
    }
}
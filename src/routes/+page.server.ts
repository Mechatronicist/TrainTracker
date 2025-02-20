import { getStopsAsync } from "$lib/stop_api.js";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ }) => {
    let stops = await getStopsAsync()
    console.log(stops)
    return {
        Stops: stops
    }
}

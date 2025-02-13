import { getDeparturesAsync } from "$lib/api.js";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    let { stop_id } = params;
    
    let departures = await getDeparturesAsync(stop_id);

    return {
        departures: departures
    }
}
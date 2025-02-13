import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    let { stop_id } = params;
    
    return {
        stopId: stop_id
    }
}
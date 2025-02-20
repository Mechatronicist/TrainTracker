import { PRIVATE_API_URL, PRIVATE_API_KEY } from '$env/static/private'

export interface Stop {
    stop_id: number,
    stop_name: string,
    stop_suburb: string,
    stop_latitude: number,
    stop_longitude: number,
    route_type: number
}

export async function getStopsAsync(): Promise<null | Stop[]> {
    let result = await fetch(`${PRIVATE_API_URL}/trains/get-all-stops`, {
        headers: {
            "X-Api-Key": PRIVATE_API_KEY,
            "Content-Type": "application/json"
        }
    });

    if(!result.ok) {
        return null;
    }

    let stops = (await result.json());
    return stops;
}
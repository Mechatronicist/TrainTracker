import { page } from "$app/state";
import { PRIVATE_API_URL, PRIVATE_API_KEY } from '$env/static/private'

export interface DepartureRoot {
    departures: Departure[]
}

export interface Departure {
    stop_id: number;
    route_id: number;
    run_id: number;
    direction_id: number;
    scheduled_departure_utc: string;
    estimated_departure_utc: string;
    platform_number: string;
}

export interface Stop {
    stop_id: number,
    stop_name: string,
    stop_suburb: string,
    stop_latitude: number,
    stop_longitude: number,
    route_type: number
}

export async function getDepartures(stop_id: number | string): Promise<Record<string, Departure[]> | null> {
    let result = await fetch(`${page.url.origin}/api/train/stop/${stop_id}`);

    if(!result.ok) {
        return null;
    }

    return JSON.parse(await result.text()) as Record<string, Departure[]>;
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
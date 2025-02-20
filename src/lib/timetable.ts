import { page } from "$app/state";

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

export async function getDepartures(stop_id: number | string): Promise<Record<string, Departure[]> | null> {
    let result = await fetch(`${page.url.origin}/api/train/stop/${stop_id}`);

    if(!result.ok) {
        return null;
    }

    return JSON.parse(await result.text()) as Record<string, Departure[]>;
}
import { PRIVATE_API_URL, PRIVATE_API_KEY } from '$env/static/private'

interface DepartureRoot {
    departures: Departure[]
}
export interface Departure {
    stop_id: number;
    route_id: number;
    run_id: number;
    scheduled_departure_utc: Date;
    estimated_departure_utc: Date;
    platform_number: string;
}

export async function getDeparturesAsync(stopId: number): Promise<null | Departure[]> {
    let result = await fetch(`${PRIVATE_API_URL}/trains/get-departures/${stopId}`, {
        headers: {
            "X-Api-Key": PRIVATE_API_KEY,
            "Content-Type": "application/json"
        }
    });

    if(!result.ok) {
        return null;
    }

    let root = (JSON.parse(await result.text()) as DepartureRoot);

    return root.departures;
}
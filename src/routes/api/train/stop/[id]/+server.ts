import { PRIVATE_API_KEY, PRIVATE_API_URL } from "$env/static/private";
import type { Departure, DepartureRoot } from "$lib/timetable";
import { json, text } from "@sveltejs/kit";

export async function GET({ params }) {
    let { id } = params;

    let stop_id = Number(id);
    if(Number.isNaN(stop_id)) {
        return text("Stop id must be a number.", {
            status: 500
        });
    }

    let departures = await getDepartures(stop_id);
    if(departures == null) {
        return text("Failed to load departures.", {
            status: 500
        });
    }

    let platformMap: Record<string, Departure[]> = {}
    for(const departure of departures) {
        let { platform_number } = departure;

        let platformNumber = Number(platform_number);
        if(platformNumber == null ||
            Number.isNaN(platformNumber)) {
            continue;
        }

        if(!platformMap[platformNumber]) {
            platformMap[platformNumber] = [];
        }

        platformMap[platformNumber].push(departure);
    }
    
    return json(platformMap);
}

async function getDepartures(stopId: number): Promise<null | Departure[]> {
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
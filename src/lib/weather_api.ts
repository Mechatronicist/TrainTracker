import { PRIVATE_WEATHER_API_URL, PRIVATE_WEATHER_API_KEY } from '$env/static/private'

export interface Current {
    last_updated_epoch: number;
    temp_c: number;
    precip_mm: number;
    cloud: number;
}
interface Weather {
    location: JSON;
    current: Current;
}


export async function getWeatherAsync(lat?: number, lon?: number): Promise<null | Current> {
    let result
    if (lat && lon)
        result = await fetch(`${PRIVATE_WEATHER_API_URL}?key=${PRIVATE_WEATHER_API_KEY}&q=${lat},${lon}`);
    else
        result = await fetch(`${PRIVATE_WEATHER_API_URL}?key=${PRIVATE_WEATHER_API_KEY}&q=Melbourne`);
    if(!result.ok) {
        return null;
    }

    let weather = (await result.json() as Weather);
    console.log(weather.location)
    return weather.current;
}
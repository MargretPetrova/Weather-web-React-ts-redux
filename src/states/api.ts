import { BASE_URL, WeatherData, WeatherError, apiKey, WeatherSuggestions } from "./types";
let errorData: WeatherError;
const SUGG_URL = "http://api.weatherapi.com/v1/search.json";
//key=<YOUR_API_KEY>&q=lond

export async function getApiData(city: string) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  try {
    const res = await fetch(
      `${BASE_URL}?key=${apiKey}&q=${city}&days=5`,
      options
    );
    if (res.status !== 200) {
      const resData: WeatherError = await res.json();
      errorData = { ...resData, status: res.status };
    }
    const resData: WeatherData = await res.json();

    return resData ;
  } catch (err: any) {
    throw errorData;
  }
} 
export async function getApiSuggestions(city: string) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  try {
    const res = await fetch(`${SUGG_URL}?key=${apiKey}&q=${city}`, options);
   
    if (res.status !== 200) {
      const resData: WeatherError = await res.json();
      errorData = { ...resData, status: res.status };
    }
 
    const resData: WeatherSuggestions = await res.json();
    return resData;
  } catch (err: any) {
    return err;
    // throw errorData;
  }
}
// {
//   "id": 9003589,
//   "name": "Sofia Airport",
//   "region": "Sofia",
//   "country": "Bulgaria",
//   "lat": 42.7,
//   "lon": 23.41,
//   "url": "sofia-airport-sofia-bulgaria"
// }
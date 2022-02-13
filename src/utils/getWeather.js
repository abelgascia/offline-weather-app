import axios from "axios";

/*
 *   @param {string} city - Name of the city to get the weather.
 *   @param {string} lat - Latitude of the user location.
 *   @param {string} lon - Longitude of the user location.
 *   @description Function that obtains the weather of the user's location or of a city.
 */

export default function getWeather({ city, lat, lon }) {
  // We build our API url here with the API_KEY, lat and lon from user or a city
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
  const WEATHER_URL = axios.create({
    baseURL: API_URL,
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      ...(city ? { q: city } : {}),
      ...(!city ? { lat: lat, lon: lon } : {}),
      appid: API_KEY,
    },
  });

  return WEATHER_URL.get();
}

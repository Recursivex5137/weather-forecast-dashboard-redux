import axios from 'axios';

import { OPEN_WEATHER_API_KEY } from '../../api-keys';
export const FETCH_WEATHER = 'FETCH_WEATHER'

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_API_KEY}`

export function fetchWeather(city){
  let request = null;
  if (city) {
    const url = `${ROOT_URL}&q=${city},us`;
    request = axios.get(url);
    console.log(`request:`);
    console.log(request);
  }
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}


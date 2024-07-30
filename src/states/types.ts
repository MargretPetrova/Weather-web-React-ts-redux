export const GET_WEATHER = "GET_WEATHER";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const GET_SUGGESTIONS = "GET_SUGGESTIONS";
export const BASE_URL = "http://api.weatherapi.com/v1/forecast.json";
export const apiKey = "5cf3c9ed748e46a084c95315230310";
//to do  all
export interface WeatherData {
  location: Location;
  current: {
    condition: Condition;
    temp_c: number;
    humidity: number;
    wind_kph: number;
    feelslike_c: number;
  };
  forecast: {
    forecastday: ForecastDay[];
  };
 
}
export interface Location {
  lat: number;
  lon: number;
  name: string;
  country?: string;
  localtime: string;
}
export interface Condition {
  text: string;
  icon: string;
  code: number;
}
export interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    // "maxwind_mph": 16.3,
    // "maxwind_kph": 26.3,
    // "totalprecip_mm": 3.47,
    // "totalprecip_in": 0.14,
    // "totalsnow_cm": 0,
    // "avgvis_km": 8.8,
    // "avgvis_miles": 5,
    // "avghumidity": 78,
    // "daily_will_it_rain": 1,
    // "daily_chance_of_rain": 98,
    // "daily_will_it_snow": 0,
    // "daily_chance_of_snow": 0,
    condition: Condition;
  };
  // "astro": {
  // 	"sunrise": "06:42 AM",
  // 	"sunset": "05:44 PM",
  // 	"moonrise": "12:39 AM",
  // 	"moonset": "08:45 AM",
  // 	"moon_phase": "Waning Gibbous",
  // 	"moon_illumination": 66,
  // 	"is_moon_up": 0,
  // 	"is_sun_up": 0
  // },
  // "hour": [
  // 	{
  // 		"time_epoch": 1709337600,
  // 		"time": "2024-03-02 00:00",
  // 		"temp_c": 4.9,
  // 		"temp_f": 40.9,
  // 		"is_day": 0,
  // 		"condition": {
  // 			"text": "Patchy rain nearby",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/night/176.png",
  // 			"code": 1063
  // 		},
  // 		"wind_mph": 8.5,
  // 		"wind_kph": 13.7,
  // 		"wind_degree": 171,
  // 		"wind_dir": "S",
  // 		"pressure_mb": 991,
  // 		"pressure_in": 29.25,
  // 		"precip_mm": 0.02,
  // 		"precip_in": 0,
  // 		"humidity": 84,
  // 		"cloud": 82,
  // 		"feelslike_c": 1.9,
  // 		"feelslike_f": 35.4,
  // 		"windchill_c": 1.9,
  // 		"windchill_f": 35.4,
  // 		"heatindex_c": 4.9,
  // 		"heatindex_f": 40.9,
  // 		"dewpoint_c": 2.5,
  // 		"dewpoint_f": 36.5,
  // 		"will_it_rain": 1,
  // 		"chance_of_rain": 89,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 14,
  // 		"gust_kph": 22.5,
  // 		"uv": 1
  // 	},
  // 	{
  // 		"time_epoch": 1709341200,
  // 		"time": "2024-03-02 01:00",
  // 		"temp_c": 5.1,
  // 		"temp_f": 41.1,
  // 		"is_day": 0,
  // 		"condition": {
  // 			"text": "Patchy rain nearby",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/night/176.png",
  // 			"code": 1063
  // 		},
  // 		"wind_mph": 10.1,
  // 		"wind_kph": 16.2,
  // 		"wind_degree": 169,
  // 		"wind_dir": "S",
  // 		"pressure_mb": 991,
  // 		"pressure_in": 29.25,
  // 		"precip_mm": 0.02,
  // 		"precip_in": 0,
  // 		"humidity": 84,
  // 		"cloud": 58,
  // 		"feelslike_c": 1.7,
  // 		"feelslike_f": 35,
  // 		"windchill_c": 1.7,
  // 		"windchill_f": 35,
  // 		"heatindex_c": 5.1,
  // 		"heatindex_f": 41.1,
  // 		"dewpoint_c": 2.7,
  // 		"dewpoint_f": 36.8,
  // 		"will_it_rain": 0,
  // 		"chance_of_rain": 67,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 16.1,
  // 		"gust_kph": 26,
  // 		"uv": 1
  // 	},
  // 	{
  // 		"time_epoch": 1709344800,
  // 		"time": "2024-03-02 02:00",
  // 		"temp_c": 5.2,
  // 		"temp_f": 41.4,
  // 		"is_day": 0,
  // 		"condition": {
  // 			"text": "Light drizzle",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/night/266.png",
  // 			"code": 1153
  // 		},
  // 		"wind_mph": 11.2,
  // 		"wind_kph": 18,
  // 		"wind_degree": 169,
  // 		"wind_dir": "S",
  // 		"pressure_mb": 990,
  // 		"pressure_in": 29.24,
  // 		"precip_mm": 0.2,
  // 		"precip_in": 0.01,
  // 		"humidity": 85,
  // 		"cloud": 80,
  // 		"feelslike_c": 1.6,
  // 		"feelslike_f": 34.9,
  // 		"windchill_c": 1.6,
  // 		"windchill_f": 34.9,
  // 		"heatindex_c": 5.2,
  // 		"heatindex_f": 41.4,
  // 		"dewpoint_c": 2.9,
  // 		"dewpoint_f": 37.3,
  // 		"will_it_rain": 1,
  // 		"chance_of_rain": 100,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 2,
  // 		"vis_miles": 1,
  // 		"gust_mph": 17.5,
  // 		"gust_kph": 28.1,
  // 		"uv": 1
  // 	},
  // 	{
  // 		"time_epoch": 1709348400,
  // 		"time": "2024-03-02 03:00",
  // 		"temp_c": 5.9,
  // 		"temp_f": 42.6,
  // 		"is_day": 0,
  // 		"condition": {
  // 			"text": "Patchy rain nearby",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/night/176.png",
  // 			"code": 1063
  // 		},
  // 		"wind_mph": 13.4,
  // 		"wind_kph": 21.6,
  // 		"wind_degree": 167,
  // 		"wind_dir": "SSE",
  // 		"pressure_mb": 990,
  // 		"pressure_in": 29.24,
  // 		"precip_mm": 0.03,
  // 		"precip_in": 0,
  // 		"humidity": 80,
  // 		"cloud": 100,
  // 		"feelslike_c": 2,
  // 		"feelslike_f": 35.6,
  // 		"windchill_c": 2,
  // 		"windchill_f": 35.6,
  // 		"heatindex_c": 5.9,
  // 		"heatindex_f": 42.6,
  // 		"dewpoint_c": 2.7,
  // 		"dewpoint_f": 36.8,
  // 		"will_it_rain": 0,
  // 		"chance_of_rain": 64,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 20,
  // 		"gust_kph": 32.1,
  // 		"uv": 1
  // 	},
  // 	{
  // 		"time_epoch": 1709352000,
  // 		"time": "2024-03-02 04:00",
  // 		"temp_c": 5.9,
  // 		"temp_f": 42.6,
  // 		"is_day": 0,
  // 		"condition": {
  // 			"text": "Patchy rain nearby",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/night/176.png",
  // 			"code": 1063
  // 		},
  // 		"wind_mph": 14.5,
  // 		"wind_kph": 23.4,
  // 		"wind_degree": 160,
  // 		"wind_dir": "SSE",
  // 		"pressure_mb": 990,
  // 		"pressure_in": 29.23,
  // 		"precip_mm": 0.02,
  // 		"precip_in": 0,
  // 		"humidity": 79,
  // 		"cloud": 100,
  // 		"feelslike_c": 1.8,
  // 		"feelslike_f": 35.3,
  // 		"windchill_c": 1.8,
  // 		"windchill_f": 35.3,
  // 		"heatindex_c": 5.9,
  // 		"heatindex_f": 42.6,
  // 		"dewpoint_c": 2.5,
  // 		"dewpoint_f": 36.5,
  // 		"will_it_rain": 1,
  // 		"chance_of_rain": 81,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 21.6,
  // 		"gust_kph": 34.7,
  // 		"uv": 1
  // 	},
  // 	{
  // 		"time_epoch": 1709355600,
  // 		"time": "2024-03-02 05:00",
  // 		"temp_c": 5.9,
  // 		"temp_f": 42.7,
  // 		"is_day": 0,
  // 		"condition": {
  // 			"text": "Patchy rain nearby",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/night/176.png",
  // 			"code": 1063
  // 		},
  // 		"wind_mph": 15.9,
  // 		"wind_kph": 25.6,
  // 		"wind_degree": 160,
  // 		"wind_dir": "SSE",
  // 		"pressure_mb": 990,
  // 		"pressure_in": 29.22,
  // 		"precip_mm": 0.05,
  // 		"precip_in": 0,
  // 		"humidity": 79,
  // 		"cloud": 100,
  // 		"feelslike_c": 1.7,
  // 		"feelslike_f": 35,
  // 		"windchill_c": 1.7,
  // 		"windchill_f": 35,
  // 		"heatindex_c": 5.9,
  // 		"heatindex_f": 42.7,
  // 		"dewpoint_c": 2.6,
  // 		"dewpoint_f": 36.6,
  // 		"will_it_rain": 0,
  // 		"chance_of_rain": 60,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 23.2,
  // 		"gust_kph": 37.3,
  // 		"uv": 1
  // 	},
  // 	{
  // 		"time_epoch": 1709359200,
  // 		"time": "2024-03-02 06:00",
  // 		"temp_c": 5.9,
  // 		"temp_f": 42.7,
  // 		"is_day": 0,
  // 		"condition": {
  // 			"text": "Patchy rain nearby",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/night/176.png",
  // 			"code": 1063
  // 		},
  // 		"wind_mph": 15.9,
  // 		"wind_kph": 25.6,
  // 		"wind_degree": 164,
  // 		"wind_dir": "SSE",
  // 		"pressure_mb": 989,
  // 		"pressure_in": 29.21,
  // 		"precip_mm": 0.04,
  // 		"precip_in": 0,
  // 		"humidity": 80,
  // 		"cloud": 100,
  // 		"feelslike_c": 1.7,
  // 		"feelslike_f": 35,
  // 		"windchill_c": 1.7,
  // 		"windchill_f": 35,
  // 		"heatindex_c": 5.9,
  // 		"heatindex_f": 42.7,
  // 		"dewpoint_c": 2.8,
  // 		"dewpoint_f": 37.1,
  // 		"will_it_rain": 1,
  // 		"chance_of_rain": 88,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 22.9,
  // 		"gust_kph": 36.9,
  // 		"uv": 1
  // 	},
  // 	{
  // 		"time_epoch": 1709362800,
  // 		"time": "2024-03-02 07:00",
  // 		"temp_c": 5.9,
  // 		"temp_f": 42.6,
  // 		"is_day": 1,
  // 		"condition": {
  // 			"text": "Light drizzle",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/day/266.png",
  // 			"code": 1153
  // 		},
  // 		"wind_mph": 16.3,
  // 		"wind_kph": 26.3,
  // 		"wind_degree": 166,
  // 		"wind_dir": "SSE",
  // 		"pressure_mb": 989,
  // 		"pressure_in": 29.22,
  // 		"precip_mm": 0.58,
  // 		"precip_in": 0.02,
  // 		"humidity": 83,
  // 		"cloud": 100,
  // 		"feelslike_c": 1.5,
  // 		"feelslike_f": 34.8,
  // 		"windchill_c": 1.5,
  // 		"windchill_f": 34.8,
  // 		"heatindex_c": 5.9,
  // 		"heatindex_f": 42.6,
  // 		"dewpoint_c": 3.2,
  // 		"dewpoint_f": 37.7,
  // 		"will_it_rain": 1,
  // 		"chance_of_rain": 100,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 2,
  // 		"vis_miles": 1,
  // 		"gust_mph": 23.3,
  // 		"gust_kph": 37.4,
  // 		"uv": 2
  // 	},
  // 	{
  // 		"time_epoch": 1709366400,
  // 		"time": "2024-03-02 08:00",
  // 		"temp_c": 6.2,
  // 		"temp_f": 43.1,
  // 		"is_day": 1,
  // 		"condition": {
  // 			"text": "Light drizzle",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/day/266.png",
  // 			"code": 1153
  // 		},
  // 		"wind_mph": 15,
  // 		"wind_kph": 24.1,
  // 		"wind_degree": 170,
  // 		"wind_dir": "S",
  // 		"pressure_mb": 990,
  // 		"pressure_in": 29.23,
  // 		"precip_mm": 0.4,
  // 		"precip_in": 0.02,
  // 		"humidity": 82,
  // 		"cloud": 100,
  // 		"feelslike_c": 2.1,
  // 		"feelslike_f": 35.8,
  // 		"windchill_c": 2.1,
  // 		"windchill_f": 35.8,
  // 		"heatindex_c": 6.2,
  // 		"heatindex_f": 43.1,
  // 		"dewpoint_c": 3.3,
  // 		"dewpoint_f": 38,
  // 		"will_it_rain": 1,
  // 		"chance_of_rain": 100,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 2,
  // 		"vis_miles": 1,
  // 		"gust_mph": 21.1,
  // 		"gust_kph": 33.9,
  // 		"uv": 2
  // 	},
  // 	{
  // 		"time_epoch": 1709370000,
  // 		"time": "2024-03-02 09:00",
  // 		"temp_c": 5.9,
  // 		"temp_f": 42.7,
  // 		"is_day": 1,
  // 		"condition": {
  // 			"text": "Moderate or heavy rain in area with thunder",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/day/389.png",
  // 			"code": 1276
  // 		},
  // 		"wind_mph": 13.4,
  // 		"wind_kph": 21.6,
  // 		"wind_degree": 176,
  // 		"wind_dir": "S",
  // 		"pressure_mb": 990,
  // 		"pressure_in": 29.23,
  // 		"precip_mm": 1.24,
  // 		"precip_in": 0.05,
  // 		"humidity": 89,
  // 		"cloud": 100,
  // 		"feelslike_c": 2.1,
  // 		"feelslike_f": 35.7,
  // 		"windchill_c": 2.1,
  // 		"windchill_f": 35.7,
  // 		"heatindex_c": 5.9,
  // 		"heatindex_f": 42.7,
  // 		"dewpoint_c": 4.3,
  // 		"dewpoint_f": 39.7,
  // 		"will_it_rain": 1,
  // 		"chance_of_rain": 100,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 6,
  // 		"vis_miles": 3,
  // 		"gust_mph": 18.5,
  // 		"gust_kph": 29.8,
  // 		"uv": 2
  // 	},
  // 	{
  // 		"time_epoch": 1709373600,
  // 		"time": "2024-03-02 10:00",
  // 		"temp_c": 5.8,
  // 		"temp_f": 42.4,
  // 		"is_day": 1,
  // 		"condition": {
  // 			"text": "Light rain shower",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
  // 			"code": 1240
  // 		},
  // 		"wind_mph": 10.5,
  // 		"wind_kph": 16.9,
  // 		"wind_degree": 186,
  // 		"wind_dir": "S",
  // 		"pressure_mb": 990,
  // 		"pressure_in": 29.25,
  // 		"precip_mm": 0.3,
  // 		"precip_in": 0.01,
  // 		"humidity": 86,
  // 		"cloud": 100,
  // 		"feelslike_c": 2.5,
  // 		"feelslike_f": 36.4,
  // 		"windchill_c": 2.5,
  // 		"windchill_f": 36.4,
  // 		"heatindex_c": 5.8,
  // 		"heatindex_f": 42.4,
  // 		"dewpoint_c": 3.7,
  // 		"dewpoint_f": 38.7,
  // 		"will_it_rain": 1,
  // 		"chance_of_rain": 100,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 14.5,
  // 		"gust_kph": 23.3,
  // 		"uv": 2
  // 	},
  // 	{
  // 		"time_epoch": 1709377200,
  // 		"time": "2024-03-02 11:00",
  // 		"temp_c": 5.8,
  // 		"temp_f": 42.4,
  // 		"is_day": 1,
  // 		"condition": {
  // 			"text": "Light rain shower",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
  // 			"code": 1240
  // 		},
  // 		"wind_mph": 10.3,
  // 		"wind_kph": 16.6,
  // 		"wind_degree": 193,
  // 		"wind_dir": "SSW",
  // 		"pressure_mb": 991,
  // 		"pressure_in": 29.27,
  // 		"precip_mm": 0.2,
  // 		"precip_in": 0.01,
  // 		"humidity": 87,
  // 		"cloud": 100,
  // 		"feelslike_c": 2.5,
  // 		"feelslike_f": 36.5,
  // 		"windchill_c": 2.5,
  // 		"windchill_f": 36.5,
  // 		"heatindex_c": 5.8,
  // 		"heatindex_f": 42.4,
  // 		"dewpoint_c": 3.8,
  // 		"dewpoint_f": 38.8,
  // 		"will_it_rain": 1,
  // 		"chance_of_rain": 100,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 13.6,
  // 		"gust_kph": 22,
  // 		"uv": 2
  // 	},
  // 	{
  // 		"time_epoch": 1709380800,
  // 		"time": "2024-03-02 12:00",
  // 		"temp_c": 6.6,
  // 		"temp_f": 43.9,
  // 		"is_day": 1,
  // 		"condition": {
  // 			"text": "Light rain shower",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
  // 			"code": 1240
  // 		},
  // 		"wind_mph": 10.7,
  // 		"wind_kph": 17.3,
  // 		"wind_degree": 202,
  // 		"wind_dir": "SSW",
  // 		"pressure_mb": 992,
  // 		"pressure_in": 29.29,
  // 		"precip_mm": 0.23,
  // 		"precip_in": 0.01,
  // 		"humidity": 78,
  // 		"cloud": 74,
  // 		"feelslike_c": 3.5,
  // 		"feelslike_f": 38.2,
  // 		"windchill_c": 3.5,
  // 		"windchill_f": 38.2,
  // 		"heatindex_c": 6.6,
  // 		"heatindex_f": 43.9,
  // 		"dewpoint_c": 3,
  // 		"dewpoint_f": 37.5,
  // 		"will_it_rain": 1,
  // 		"chance_of_rain": 100,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 14.3,
  // 		"gust_kph": 23,
  // 		"uv": 2
  // 	},
  // 	{
  // 		"time_epoch": 1709384400,
  // 		"time": "2024-03-02 13:00",
  // 		"temp_c": 7.7,
  // 		"temp_f": 45.8,
  // 		"is_day": 1,
  // 		"condition": {
  // 			"text": "Patchy rain nearby",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
  // 			"code": 1063
  // 		},
  // 		"wind_mph": 12.8,
  // 		"wind_kph": 20.5,
  // 		"wind_degree": 205,
  // 		"wind_dir": "SSW",
  // 		"pressure_mb": 992,
  // 		"pressure_in": 29.3,
  // 		"precip_mm": 0.11,
  // 		"precip_in": 0,
  // 		"humidity": 67,
  // 		"cloud": 92,
  // 		"feelslike_c": 4.4,
  // 		"feelslike_f": 39.9,
  // 		"windchill_c": 4.4,
  // 		"windchill_f": 39.9,
  // 		"heatindex_c": 7.7,
  // 		"heatindex_f": 45.8,
  // 		"dewpoint_c": 1.9,
  // 		"dewpoint_f": 35.4,
  // 		"will_it_rain": 1,
  // 		"chance_of_rain": 100,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 15.9,
  // 		"gust_kph": 25.5,
  // 		"uv": 2
  // 	},
  // 	{
  // 		"time_epoch": 1709388000,
  // 		"time": "2024-03-02 14:00",
  // 		"temp_c": 8,
  // 		"temp_f": 46.4,
  // 		"is_day": 1,
  // 		"condition": {
  // 			"text": "Partly cloudy",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
  // 			"code": 1003
  // 		},
  // 		"wind_mph": 11.9,
  // 		"wind_kph": 19.1,
  // 		"wind_degree": 210,
  // 		"wind_dir": "SSW",
  // 		"pressure_mb": 991,
  // 		"pressure_in": 29.26,
  // 		"precip_mm": 0.01,
  // 		"precip_in": 0,
  // 		"humidity": 76,
  // 		"cloud": 50,
  // 		"feelslike_c": 4.7,
  // 		"feelslike_f": 40.5,
  // 		"windchill_c": 4.7,
  // 		"windchill_f": 40.5,
  // 		"heatindex_c": 7.9,
  // 		"heatindex_f": 46.2,
  // 		"dewpoint_c": 1.2,
  // 		"dewpoint_f": 34.2,
  // 		"will_it_rain": 1,
  // 		"chance_of_rain": 78,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 15,
  // 		"gust_kph": 24.1,
  // 		"uv": 2
  // 	},
  // 	{
  // 		"time_epoch": 1709391600,
  // 		"time": "2024-03-02 15:00",
  // 		"temp_c": 7.5,
  // 		"temp_f": 45.5,
  // 		"is_day": 1,
  // 		"condition": {
  // 			"text": "Patchy rain nearby",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
  // 			"code": 1063
  // 		},
  // 		"wind_mph": 10.7,
  // 		"wind_kph": 17.3,
  // 		"wind_degree": 217,
  // 		"wind_dir": "SW",
  // 		"pressure_mb": 993,
  // 		"pressure_in": 29.32,
  // 		"precip_mm": 0.01,
  // 		"precip_in": 0,
  // 		"humidity": 63,
  // 		"cloud": 86,
  // 		"feelslike_c": 4.5,
  // 		"feelslike_f": 40.2,
  // 		"windchill_c": 4.5,
  // 		"windchill_f": 40.2,
  // 		"heatindex_c": 7.5,
  // 		"heatindex_f": 45.5,
  // 		"dewpoint_c": 1.1,
  // 		"dewpoint_f": 33.9,
  // 		"will_it_rain": 0,
  // 		"chance_of_rain": 62,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 13.5,
  // 		"gust_kph": 21.8,
  // 		"uv": 2
  // 	},
  // 	{
  // 		"time_epoch": 1709395200,
  // 		"time": "2024-03-02 16:00",
  // 		"temp_c": 7.1,
  // 		"temp_f": 44.7,
  // 		"is_day": 1,
  // 		"condition": {
  // 			"text": "Partly Cloudy ",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
  // 			"code": 1003
  // 		},
  // 		"wind_mph": 8.3,
  // 		"wind_kph": 13.3,
  // 		"wind_degree": 223,
  // 		"wind_dir": "SW",
  // 		"pressure_mb": 994,
  // 		"pressure_in": 29.34,
  // 		"precip_mm": 0,
  // 		"precip_in": 0,
  // 		"humidity": 65,
  // 		"cloud": 29,
  // 		"feelslike_c": 4.6,
  // 		"feelslike_f": 40.2,
  // 		"windchill_c": 4.6,
  // 		"windchill_f": 40.2,
  // 		"heatindex_c": 7.1,
  // 		"heatindex_f": 44.7,
  // 		"dewpoint_c": 1,
  // 		"dewpoint_f": 33.8,
  // 		"will_it_rain": 0,
  // 		"chance_of_rain": 0,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 10.9,
  // 		"gust_kph": 17.5,
  // 		"uv": 3
  // 	},
  // 	{
  // 		"time_epoch": 1709398800,
  // 		"time": "2024-03-02 17:00",
  // 		"temp_c": 6.5,
  // 		"temp_f": 43.7,
  // 		"is_day": 1,
  // 		"condition": {
  // 			"text": "Partly Cloudy ",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
  // 			"code": 1003
  // 		},
  // 		"wind_mph": 5.4,
  // 		"wind_kph": 8.6,
  // 		"wind_degree": 234,
  // 		"wind_dir": "SW",
  // 		"pressure_mb": 994,
  // 		"pressure_in": 29.35,
  // 		"precip_mm": 0,
  // 		"precip_in": 0,
  // 		"humidity": 69,
  // 		"cloud": 50,
  // 		"feelslike_c": 4.8,
  // 		"feelslike_f": 40.6,
  // 		"windchill_c": 4.8,
  // 		"windchill_f": 40.6,
  // 		"heatindex_c": 6.5,
  // 		"heatindex_f": 43.7,
  // 		"dewpoint_c": 1.3,
  // 		"dewpoint_f": 34.3,
  // 		"will_it_rain": 0,
  // 		"chance_of_rain": 0,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 7.5,
  // 		"gust_kph": 12.1,
  // 		"uv": 3
  // 	},
  // 	{
  // 		"time_epoch": 1709402400,
  // 		"time": "2024-03-02 18:00",
  // 		"temp_c": 5.6,
  // 		"temp_f": 42,
  // 		"is_day": 0,
  // 		"condition": {
  // 			"text": "Partly Cloudy ",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
  // 			"code": 1003
  // 		},
  // 		"wind_mph": 3.1,
  // 		"wind_kph": 5,
  // 		"wind_degree": 231,
  // 		"wind_dir": "SW",
  // 		"pressure_mb": 995,
  // 		"pressure_in": 29.38,
  // 		"precip_mm": 0,
  // 		"precip_in": 0,
  // 		"humidity": 76,
  // 		"cloud": 59,
  // 		"feelslike_c": 4.7,
  // 		"feelslike_f": 40.5,
  // 		"windchill_c": 4.7,
  // 		"windchill_f": 40.5,
  // 		"heatindex_c": 5.6,
  // 		"heatindex_f": 42,
  // 		"dewpoint_c": 1.6,
  // 		"dewpoint_f": 34.9,
  // 		"will_it_rain": 0,
  // 		"chance_of_rain": 0,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 4.9,
  // 		"gust_kph": 7.8,
  // 		"uv": 1
  // 	},
  // 	{
  // 		"time_epoch": 1709406000,
  // 		"time": "2024-03-02 19:00",
  // 		"temp_c": 5.3,
  // 		"temp_f": 41.5,
  // 		"is_day": 0,
  // 		"condition": {
  // 			"text": "Overcast ",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/night/122.png",
  // 			"code": 1009
  // 		},
  // 		"wind_mph": 1.8,
  // 		"wind_kph": 2.9,
  // 		"wind_degree": 183,
  // 		"wind_dir": "S",
  // 		"pressure_mb": 995,
  // 		"pressure_in": 29.4,
  // 		"precip_mm": 0,
  // 		"precip_in": 0,
  // 		"humidity": 78,
  // 		"cloud": 100,
  // 		"feelslike_c": 5.3,
  // 		"feelslike_f": 41.5,
  // 		"windchill_c": 5.3,
  // 		"windchill_f": 41.5,
  // 		"heatindex_c": 5.3,
  // 		"heatindex_f": 41.5,
  // 		"dewpoint_c": 1.7,
  // 		"dewpoint_f": 35.1,
  // 		"will_it_rain": 0,
  // 		"chance_of_rain": 0,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 2.8,
  // 		"gust_kph": 4.6,
  // 		"uv": 1
  // 	},
  // 	{
  // 		"time_epoch": 1709409600,
  // 		"time": "2024-03-02 20:00",
  // 		"temp_c": 5.3,
  // 		"temp_f": 41.5,
  // 		"is_day": 0,
  // 		"condition": {
  // 			"text": "Cloudy ",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/night/119.png",
  // 			"code": 1006
  // 		},
  // 		"wind_mph": 2,
  // 		"wind_kph": 3.2,
  // 		"wind_degree": 204,
  // 		"wind_dir": "SSW",
  // 		"pressure_mb": 996,
  // 		"pressure_in": 29.41,
  // 		"precip_mm": 0,
  // 		"precip_in": 0,
  // 		"humidity": 78,
  // 		"cloud": 63,
  // 		"feelslike_c": 5.2,
  // 		"feelslike_f": 41.4,
  // 		"windchill_c": 5.2,
  // 		"windchill_f": 41.4,
  // 		"heatindex_c": 5.3,
  // 		"heatindex_f": 41.5,
  // 		"dewpoint_c": 1.8,
  // 		"dewpoint_f": 35.2,
  // 		"will_it_rain": 0,
  // 		"chance_of_rain": 0,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 3.2,
  // 		"gust_kph": 5.1,
  // 		"uv": 1
  // 	},
  // 	{
  // 		"time_epoch": 1709413200,
  // 		"time": "2024-03-02 21:00",
  // 		"temp_c": 5.1,
  // 		"temp_f": 41.2,
  // 		"is_day": 0,
  // 		"condition": {
  // 			"text": "Overcast ",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/night/122.png",
  // 			"code": 1009
  // 		},
  // 		"wind_mph": 1.8,
  // 		"wind_kph": 2.9,
  // 		"wind_degree": 190,
  // 		"wind_dir": "S",
  // 		"pressure_mb": 996,
  // 		"pressure_in": 29.42,
  // 		"precip_mm": 0,
  // 		"precip_in": 0,
  // 		"humidity": 79,
  // 		"cloud": 100,
  // 		"feelslike_c": 5.1,
  // 		"feelslike_f": 41.2,
  // 		"windchill_c": 5.1,
  // 		"windchill_f": 41.2,
  // 		"heatindex_c": 5.1,
  // 		"heatindex_f": 41.2,
  // 		"dewpoint_c": 1.7,
  // 		"dewpoint_f": 35.1,
  // 		"will_it_rain": 0,
  // 		"chance_of_rain": 0,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 2.8,
  // 		"gust_kph": 4.5,
  // 		"uv": 1
  // 	},
  // 	{
  // 		"time_epoch": 1709416800,
  // 		"time": "2024-03-02 22:00",
  // 		"temp_c": 5,
  // 		"temp_f": 41,
  // 		"is_day": 0,
  // 		"condition": {
  // 			"text": "Overcast ",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/night/122.png",
  // 			"code": 1009
  // 		},
  // 		"wind_mph": 2,
  // 		"wind_kph": 3.2,
  // 		"wind_degree": 233,
  // 		"wind_dir": "SW",
  // 		"pressure_mb": 997,
  // 		"pressure_in": 29.43,
  // 		"precip_mm": 0,
  // 		"precip_in": 0,
  // 		"humidity": 79,
  // 		"cloud": 100,
  // 		"feelslike_c": 4.9,
  // 		"feelslike_f": 40.8,
  // 		"windchill_c": 4.9,
  // 		"windchill_f": 40.8,
  // 		"heatindex_c": 5,
  // 		"heatindex_f": 41,
  // 		"dewpoint_c": 1.8,
  // 		"dewpoint_f": 35.2,
  // 		"will_it_rain": 0,
  // 		"chance_of_rain": 0,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 3.1,
  // 		"gust_kph": 5,
  // 		"uv": 1
  // 	},
  // 	{
  // 		"time_epoch": 1709420400,
  // 		"time": "2024-03-02 23:00",
  // 		"temp_c": 4.8,
  // 		"temp_f": 40.7,
  // 		"is_day": 0,
  // 		"condition": {
  // 			"text": "Overcast ",
  // 			"icon": "//cdn.weatherapi.com/weather/64x64/night/122.png",
  // 			"code": 1009
  // 		},
  // 		"wind_mph": 2.9,
  // 		"wind_kph": 4.7,
  // 		"wind_degree": 275,
  // 		"wind_dir": "W",
  // 		"pressure_mb": 997,
  // 		"pressure_in": 29.43,
  // 		"precip_mm": 0,
  // 		"precip_in": 0,
  // 		"humidity": 81,
  // 		"cloud": 97,
  // 		"feelslike_c": 4,
  // 		"feelslike_f": 39.2,
  // 		"windchill_c": 4,
  // 		"windchill_f": 39.2,
  // 		"heatindex_c": 4.8,
  // 		"heatindex_f": 40.7,
  // 		"dewpoint_c": 1.8,
  // 		"dewpoint_f": 35.2,
  // 		"will_it_rain": 0,
  // 		"chance_of_rain": 0,
  // 		"will_it_snow": 0,
  // 		"chance_of_snow": 0,
  // 		"vis_km": 10,
  // 		"vis_miles": 6,
  // 		"gust_mph": 4.5,
  // 		"gust_kph": 7.2,
  // 		"uv": 1
  // 	}
  // ]
}

export interface Suggestion {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}
export interface WeatherSuggestions extends Array<Suggestion> {}

export interface WeatherError {
  code?: number;
  message: string;
  type?: string;
  status?: number;
}
export interface ResData {
  location?: Location;
  current?: {
    condition: Condition;
    temp_c: number;
  };
  forcastday?: {
    forcastday: ForecastDay[];
  };
  code?: number;
  message?: string;
  type?: string;
  status?: number;
  hasError?: boolean;
}

export interface WeatherState {
  data?: {
    weather?: WeatherData;
    suggestions?: WeatherSuggestions;
    error?: WeatherError;
  };
  loading: boolean;
  hasError: boolean;
}
export interface SuggestionsState {
  suggestions: WeatherSuggestions,
  loading: boolean,
  hasError: boolean,
}

interface GetWeatherAction {
  type: typeof GET_WEATHER;
  payload?: WeatherData;
}

interface GetSuggestionsAction {
  type: typeof GET_SUGGESTIONS;
  payload?: WeatherSuggestions;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  // to do in the store
  type: typeof SET_ERROR;
  payload?: WeatherError;
}
export type WeatherAction =
  | SetLoadingAction
  | SetErrorAction
  | GetWeatherAction;

export type SuggestionsAction = | GetSuggestionsAction;

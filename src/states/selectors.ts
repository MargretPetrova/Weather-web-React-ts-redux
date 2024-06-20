import { RematchRootState } from "@rematch/core";

import { RootState } from ".";
import { createSelector } from "@reduxjs/toolkit";
const select = (state: RootState) => state;

//redux
export const getLoadingState = createSelector(
  select,
  (state) => state.weatherReducer.loading
);
export const hasError = createSelector(
  select,
  (state) => state.weatherReducer.hasError
);

export const getWeatherData = createSelector(
  select,
  (state) => state.weatherReducer.data || {}
);
export const getWeatherLocation = createSelector(
  select,
  (state) => state.weatherReducer.data?.weather?.location
);
export const getWeatherCurrent = createSelector(
  select,
  (state) => state.weatherReducer.data?.weather?.current
);
export const getWeatherForecastDays = createSelector(
  select,
  (state) => state.weatherReducer.data?.weather?.forecast.forecastday
);
export const getWeatherSuggestions = createSelector(
  select,
  (state) => state.weatherReducer.data?.suggestions
);

// export const getErrorData = createSelector(select, (state)=> state.weatherReducer.error);


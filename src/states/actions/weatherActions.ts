import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { WeatherAction, GET_WEATHER, SET_ERROR, GET_SUGGESTIONS, WeatherError, SET_LOADING } from "../types";
import { getApiData, getApiSuggestions } from "../api";

export const getWeather = (
  city: string
): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const resData = await getApiData(city);
      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
    } catch (err: any) {
      console.log("getWeather when there is an error", err);
      dispatch(setError(err));
    }
  };
};
export const getSuggestions = (
  city: string
): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const resData = await getApiSuggestions(city);
      dispatch({
        type: GET_SUGGESTIONS,
        payload: resData,
      });
      return resData;
    } catch (err: any) {
      console.log("suggestions when there is an error", err);
      dispatch(setError(err));
    }
  };
};
export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING,
  };
};
export const setError = (err:WeatherError): WeatherAction => {
  return {
    type: SET_ERROR,
    payload:err,
  };
};





import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { WeatherAction, GET_WEATHER, SET_ERROR, WeatherError, SET_LOADING } from "../types";
import { getApiData } from "../api";

export const getWeather = (
  city: string
): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const resData = await getApiData(city);
      localStorage.setItem("weatherData", JSON.stringify(resData.location.name));
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





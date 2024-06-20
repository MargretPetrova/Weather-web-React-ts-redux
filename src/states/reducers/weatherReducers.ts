import {
  WeatherState,
  WeatherAction,
  GET_WEATHER,
  SET_LOADING,
  SET_ERROR,
  GET_SUGGESTIONS,
} from "../types";

export const initialState: WeatherState = {
  data: {},
  loading: false,
  hasError: false,
};

const weatherReducer = (
  state = initialState,
  action: WeatherAction | any
): WeatherState => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        data: { weather: action.payload },
        loading: false,
        hasError: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case SET_ERROR:
      return {
        ...state,
        data: { error: action.payload },
        loading: false,
        hasError: true,
      };
    case GET_SUGGESTIONS:
      return {
        ...state,
        data: { suggestions: action.payload },
        hasError: false,
        loading: false,
      };

    default:
      return state;
  }
};
export default weatherReducer;

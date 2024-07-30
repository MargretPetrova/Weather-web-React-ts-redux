import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { GET_SUGGESTIONS, SuggestionsAction } from "../types";
import { getApiSuggestions } from "../api";

export const getSuggestions = (
    city: string
  ): ThunkAction<void, RootState, null, SuggestionsAction> => {
    return async (dispatch) => {
      try {
        const resData = await getApiSuggestions(city);
        dispatch({
          type: GET_SUGGESTIONS,
          payload: resData,
        });
        return resData;
      } catch (err: any) {
        console.log("suggestions when there is an error", err);
      }
    };
  };
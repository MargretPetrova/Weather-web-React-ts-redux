import {
    SuggestionsState,
    SuggestionsAction,
    GET_SUGGESTIONS,
  } from "../types";
  
  export const initialState: SuggestionsState = {
    suggestions: [],
    loading: false,
    hasError: false,
  };
  
  const suggestionsReducer = (
    state = initialState,
    action: SuggestionsAction | any
  ): SuggestionsState => {
    switch (action.type) {
      case GET_SUGGESTIONS:
        return {
         ...state,
          suggestions: action.payload,
          hasError: false,
          loading: false,
        };
  
      default:
        return state;
    }
  };
  export default suggestionsReducer;
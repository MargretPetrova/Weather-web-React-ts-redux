import weatherReducer from './reducers/weatherReducers';
import suggestionsReducer from './reducers/sugestionsReducers'
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
      weatherReducer,
      suggestionsReducer
    }
   
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch =  typeof store.dispatch

export default store;
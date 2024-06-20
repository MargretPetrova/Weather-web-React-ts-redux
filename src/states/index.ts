import weatherReducer from './reducers/weatherReducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
      weatherReducer
    }
   
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch =  typeof store.dispatch

export default store;
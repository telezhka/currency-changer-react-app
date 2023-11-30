import { configureStore } from '@reduxjs/toolkit';
import { currenciesReducer } from './currenciesSlice';

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
});

import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrencies } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const currenciesSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchCurrencies.pending]: handlePending,
    [fetchCurrencies.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchCurrencies.rejected]: handleRejected,
  },
});

export const currenciesReducer = currenciesSlice.reducer;

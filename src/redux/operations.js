import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.currencyapi.com/v3';
const accessKey = 'cur_live_0ciH3mb4V1hGd4crubn5uEW74L6IIxNIAelngKIM';

export const fetchCurrencies = createAsyncThunk(
  'currencies/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/latest?apikey=${accessKey}`);
      const preparedResponse = response.data.data;
      const modifiedResponse = {};
      for (const key in preparedResponse) {
        if (preparedResponse.hasOwnProperty(key)) {
          modifiedResponse[key] = preparedResponse[key].value;
        }
      }
      console.log(modifiedResponse);
      return modifiedResponse;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

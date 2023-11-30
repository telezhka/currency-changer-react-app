import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://data.fixer.io/api';
const accessKey = 'bf1dcc643aae700903a54e2fcbceb1fc';

export const fetchCurrencies = createAsyncThunk(
  'currencies/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/latest?access_key=${accessKey}`);
      //   console.log(response.data.rates);
      return response.data.rates;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

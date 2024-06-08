import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosRequest } from '../../utils/axiosRequest';
import { saveToken } from '../../utils/token';

export const login = createAsyncThunk(
  'login/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axiosRequest.post('Account/login', credentials);
      if (data.statusCode === 200) {
        saveToken(data.data);
        return data.data;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    error: null,
    loggedIn: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.loggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default loginSlice.reducer;

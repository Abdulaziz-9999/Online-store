import { createSlice } from '@reduxjs/toolkit';
import { getData } from '../../api/home/home';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default homeSlice.reducer;

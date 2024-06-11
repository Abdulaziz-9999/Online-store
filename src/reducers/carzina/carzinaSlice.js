import { createSlice } from '@reduxjs/toolkit';
import { getCarz } from '../../api/carzina/carzina';

const carzinaSlice = createSlice({
  name: 'carzina',
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCarz.fulfilled, (state, action) => {
        state.data = action.payload;  
        state.status = 'succeeded';
      })
      .addCase(getCarz.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCarz.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default carzinaSlice.reducer;

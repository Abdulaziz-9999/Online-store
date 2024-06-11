import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosRequest } from '../../utils/axiosRequest';

export const getData = createAsyncThunk('home/getData', async () => {
  try {
    const { data } = await axiosRequest.get('Product/get-products');
    return data?.data.products;
  } catch (error) {
    console.log(error);
  }
});

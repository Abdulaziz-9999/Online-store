import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosRequest } from '../../utils/axiosRequest';

export const getCarz = createAsyncThunk('carzina/getCarz', async () => {
  try {
    const { data } = await axiosRequest.get('Cart/get-products-from-cart');
    console.log(data?.data[0].productsInCart);
    return data?.data[0].productsInCart;
  } catch (error) {
    console.log(error);
  }
});

export const incrence = createAsyncThunk('carzina/increase', async (id, { dispatch }) => {
  try {
    let {data} = await axiosRequest.put(`Cart/increase-product-in-cart?id=${id}`);
    dispatch(getCarz());
  } catch (error) {
    console.log(error);
  }
});

export const reduce = createAsyncThunk('carzina/reduce', async (id, { dispatch }) => {
  try {
   let {data} = await axiosRequest.put(`Cart/reduce-product-in-cart?id=${id}`);
    dispatch(getCarz());
  } catch (error) {
    console.log(error);
  }
});

export const add = createAsyncThunk('carzina/add', async (id, { dispatch }) => {
  try {
   let {data} = await axiosRequest.post(`Cart/add-product-to-cart?id=${id}`);
    dispatch(getCarz());
  } catch (error) {
    console.log(error);
  }
});

export const delProduct = createAsyncThunk('carzina/delProduct', async (id, { dispatch }) => {
  try {
   let {data} = await axiosRequest.delete(`Cart/delete-product-from-cart?id=${id}`);
    dispatch(getCarz());
  } catch (error) {
    console.log(error);
  }
});

export const removeAll = createAsyncThunk('carzina/removeAll', async (id, { dispatch }) => {
  try {
   let {data} = await axiosRequest.delete(`Cart/clear-cart${id}`);
    dispatch(getCarz());
  } catch (error) {
    console.log(error);
  }
});

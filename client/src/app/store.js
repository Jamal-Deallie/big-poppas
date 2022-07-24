import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import { cartReducer } from '../features/cart/cartSlice';
import { queryReducer } from '../features/query/querySlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    query: queryReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

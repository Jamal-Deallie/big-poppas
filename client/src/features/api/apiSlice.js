import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://big-poppas.herokuapp.com/api/v1',
    // credentials: 'include',
  }),
  tagTypes: ['Product', 'User', 'Cart', 'NewsLetter', 'Contact'],
  endpoints: builder => ({}),
});

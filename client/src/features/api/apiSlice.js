import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    mode: 'cors',
    baseUrl: 'https://big-poppas-production.up.railway.app',
    // baseUrl: 'http://localhost:4000',
    prepareHeaders: (headers, { getState }) => {
      const token = JSON.parse(localStorage.getItem('token'));
      if (token) {
        headers.set(
          'authorization',
          `Bearer ${token}`,
          'Access-Control-Allow-Origin',
          '*'
        );
      }
      return headers;
    },
  }),
  tagTypes: ['Product', 'User', 'Cart', 'NewsLetter', 'Contact'],
  endpoints: builder => ({}),
});

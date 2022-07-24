import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: ' ',
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    getQuery: (state, { payload }) => {
      console.log(payload);
      state.searchQuery = payload.searchQuery;
    },
  },
});

export const { getQuery } = querySlice.actions;

export const selectQuery = state => state.query.searchQuery;

export const queryReducer = querySlice.reducer;

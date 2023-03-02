import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    pageStat: () => 'Coming Soon',
  },
});

export const { pageStat } = categoriesSlice.actions;
export default categoriesSlice.reducer;

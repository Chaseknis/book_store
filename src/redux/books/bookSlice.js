import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },

    deleteBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },
});

// console.log(bookSlice);

export const { addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;

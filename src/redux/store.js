import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

function configureAppStore() {
  const store = configureStore({
    reducer: {
      books: bookReducer,
      categories: categoriesReducer,
    },
    middleware: [thunk],
  });

  return store;
}

export default configureAppStore();

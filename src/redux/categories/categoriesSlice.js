import { createAction } from '@reduxjs/toolkit';

const CHECKED_STATUS = 'bookstore/categories/CHECKED_STATUS';

const checkStatus = createAction(CHECKED_STATUS);

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case CHECKED_STATUS:
      return 'Coming Soon!';
    default:
      return state;
  }
};

export { checkStatus };
export default categoryReducer;

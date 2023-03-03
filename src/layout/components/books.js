import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './styles/books.css';
import { removeBook } from '../../redux/books/bookSlice';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  return (
    <div className="book_list_wrapper">
      <ul>
        <li>{title}</li>
        <li>{author}</li>
      </ul>
      <div className="book_list_button">
        <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

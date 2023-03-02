import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './styles/books.css';
import { deleteBook } from '../../redux/books/bookSlice';

function Book({ book }) {
  const { id, title, author } = book;

  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteBook({ id }));
  };

  return (
    <div className="book_list_wrapper">
      <ul>
        <li>{title}</li>
        <li>{author}</li>
      </ul>
      <div className="book_list_button">
        <button type="button" onClick={deleteHandler}>Remove</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;

import React from 'react';
import PropTypes from 'prop-types';
import './styles/books.css';

function Book(props) {
  const { title, author } = props;

  return (
    <div className="book_list_wrapper">
      <ul>
        <li>{title}</li>
        <li>{author}</li>
      </ul>
      <div className="book_list_button">
        <button type="submit">Remove</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

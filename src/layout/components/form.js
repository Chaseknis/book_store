import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/form.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/bookSlice';

function bookProperties(title, author) {
  return {
    id: uuidv4(),
    title,
    author,
  };
}

const Form = () => {
  const titleValue = useRef();
  const authorValue = useRef();
  const dispatch = useDispatch();

  function clickHandler(e) {
    const title = titleValue.current.value;
    const author = authorValue.current.value;

    if (title !== '' && author !== '') {
      dispatch(addBook(bookProperties(title, author)));
      titleValue.current.value = '';
      authorValue.current.value = '';
    } else e.preventDefault();
  }

  return (
    <div className="form_wrapper">
      <form>
        <input type="text" id="author" ref={titleValue} placeholder="Add Book Author" />
        <input type="text" id="title" ref={authorValue} placeholder="Add Book Title" />
        <button type="button" onClick={clickHandler}>Add Book</button>
      </form>
    </div>
  );
};

export default Form;

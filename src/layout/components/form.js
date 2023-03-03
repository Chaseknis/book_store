import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/form.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/bookSlice';

const createBook = (title, author) => (
  {
    item_id: uuidv4(),
    title,
    author,
    category: 'Adventure',
  }
);

const Form = () => {
  const titleValue = useRef();
  const authorValue = useRef();
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    const title = titleValue.current.value;
    const author = authorValue.current.value;

    if (title !== '' && author !== '') {
      dispatch(addBook(createBook(title, author)));
      titleValue.current.value = '';
      authorValue.current.value = '';
    } else e.preventDefault();
  };

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

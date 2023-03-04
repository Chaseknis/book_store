import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/form.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/bookSlice';

const createBook = (title, author, categories) => (
  {
    item_id: uuidv4(),
    title,
    author,
    categories,
  }
);

const Form = () => {
  const titleValue = useRef();
  const authorValue = useRef();
  const categoriesValue = useRef();
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    const title = titleValue.current.value;
    const author = authorValue.current.value;
    const categories = categoriesValue.current.value;

    if (title !== '' && author !== '') {
      dispatch(addBook(createBook(title, author, categories)));
      titleValue.current.value = '';
      authorValue.current.value = '';
    } else e.preventDefault();
  };

  return (
    <div className="form_wrapper flex">
      <div className="form_progress_bar" />
      <h2>ADD NEW BOOK</h2>
      <form className="flex">
        <input type="text" id="title" ref={authorValue} placeholder="Add Book Title" className="border_none br_5px" />
        <input type="text" id="author" ref={titleValue} placeholder="Add Book Author" className="border_none br_5px" />
        <select name="categories" id="categories" ref={categoriesValue} className="border_none br_5px">
          <option value="action">Action</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <button type="button" onClick={clickHandler} className="border_none br_5px">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;

import React from 'react';
import './styles/form.css';

const Form = () => (
  <div className="form_wrapper">
    <form>
      <input type="text" id="author" placeholder="Add Book Author" />
      <input type="text" id="title" placeholder="Add Book Title" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default Form;

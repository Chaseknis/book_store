import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from '../layout';
import Book from '../layout/components/books';
import Form from '../layout/components/form';
import { getAllBooks } from '../redux/books/bookSlice';

function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <Layout>
      <ul>
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <Form />
    </Layout>
  );
}

export default Books;

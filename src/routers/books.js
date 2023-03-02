import React from 'react';
import { useSelector } from 'react-redux';
import { Layout } from '../layout';
import Book from '../layout/components/books';
import Form from '../layout/components/form';

function Books() {
  const books = useSelector((state) => state.books);

  return (
    <Layout>
      {/* <Book title="Dogs in The Hood" author="Snoop Dog" /> */}
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </ul>
      <Form />
    </Layout>
  );
}

export default Books;

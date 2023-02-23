import React from 'react';
import { Layout } from '../layout';
import Book from '../layout/components/books';
import Form from '../layout/components/form';

const Books = () => (
  <Layout>
    <Book title="Dogs in The Hood" author="Snoop Dog" />
    <Form />
  </Layout>
);

export default Books;

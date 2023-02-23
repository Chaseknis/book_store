import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/fontAwesomeIcons';
import { Books, Categories } from './routers';
import Nav from './layout/components/nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/books" element={<Books />} />

        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => (
  <nav>
    <div className="nav_list">
      <Link to="/" className="logo">
        Bookstore CMS
      </Link>
      <ul>
        <li>
          <Link to="/books" className="menu_links">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories" className="menu_links black_two">CATEGORIES</Link>
        </li>
      </ul>
    </div>
    <a to="/" className="user_icon">
      <FontAwesomeIcon icon="user" className="icon" />
    </a>
  </nav>
);

export default Nav;

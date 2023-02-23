import React from 'react';
import { PropTypes } from 'prop-types';
import Nav from './components/nav';
import '../index.css';

const Layout = ({ children }) => (
  <div>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout, Nav };

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '../layout';
import { checkStatus } from '../redux/categories/categoriesSlice';
import './styles/categories.css';

function Categories() {
  const dispatch = useDispatch();
  const currentStatus = useSelector((state) => state.Categories);

  function showStatus() {
    dispatch(checkStatus());
  }

  return (
    <Layout>
      <div className="categories_button_wrapper">
        <h3>{currentStatus}</h3>
        <button type="button" onClick={showStatus}>Check Status</button>
      </div>
    </Layout>
  );
}

export default Categories;

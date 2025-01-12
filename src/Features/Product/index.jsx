import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import ListPage from './page/ListPage';
import { Box } from '@mui/material';
import ProductList from './page/ProductList';

ProductFeatures.propTypes = {};

function ProductFeatures(props) {
  return (
    <Box pt={4}>
      <Routes>
        <Route
          path="/"
          element={<ProductList />}
        ></Route>
      </Routes>
    </Box>
  );
}

export default ProductFeatures;

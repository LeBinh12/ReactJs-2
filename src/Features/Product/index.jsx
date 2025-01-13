import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import ListPage from './page/ListPage';
import { Box } from '@mui/material';

ProductFeatures.propTypes = {};

function ProductFeatures(props) {
  return (
    <Box pt={4}>
      <Routes>
        <Route
          path="/"
          element={<ListPage />}
        ></Route>
      </Routes>
    </Box>
  );
}

export default ProductFeatures;

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

ProductThumnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumnail({ product }) {
  const thumbnail = product.image ? product.image : 'https://placehold.jp/200x200.png';

  return (
    <Box>
      <img
        src={thumbnail}
        alt={product.name}
        width="100%"
      />{' '}
    </Box>
  );
}

export default ProductThumnail;

import React from 'react';
import PropTypes from 'prop-types';
import { Box, Skeleton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from 'utils';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const history = useNavigate();
  const thumbnail = product.image ? product.image : 'https://placehold.jp/200x200.png';

  const handleClick = () => {
    history(`/products/${product.id}`);
  };

  return (
    <div>
      <Box
        padding={1}
        onClick={handleClick}
      >
        <Box
          padding={1}
          minHeight="215px"
        >
          <img
            src={thumbnail}
            alt={product.name}
            width="100%"
          />
        </Box>
        <Typography variant="body2">{product.name}</Typography>
        <Typography variant="body2">
          <Box
            component="span"
            fontSize="16px"
            fontWeight="bold"
            mr={1}
          >
            {formatPrice(product.price)}
          </Box>
          {product.sale > 0 ? `-${product.sale}%` : ''}
        </Typography>
      </Box>
    </div>
  );
}

export default Product;

import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { formatPrice } from 'utils';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const useStyle = makeStyles((theme) => ({
    root: {
        paddingBottom: '16px',
        borderBottom: '1px solid Silver',
  },

  description: {},
  sale: {},
  price: {
    marginRight: '16px',
    textDecoration: 'line-through',
  },
  priceSale: {
    marginRight: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  priceBox: {
    backgroundColor: '#CFEBFC',
    padding: '16px',
  },
}));

function ProductInfo({ product = {} }) {
  const { name, sale, price, description, short_description } = product;

  const classes = useStyle();

  const priceSale = price * (1 - sale / 100);

  return (
    <Box className={classes.root}>
      <Typography
        component="h1"
        variant="h3  "
      >
        {name}
      </Typography>
      <Typography
        variant="body2"
        className={classes.description}
      >
        {short_description}
      </Typography>

      <Box className={classes.priceBox}>
        <Box
          component="span"
          className={classes.priceSale}
        >
          {formatPrice(priceSale)}
        </Box>
        {(sale > 0) &&
        (
          <>
            <Box
              component="span"
              className={classes.price}
            >
              {formatPrice(price)}
            </Box>
            <Box
              component="span"
              className={classes.Sale}
            >
              {`-${sale}%`}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;

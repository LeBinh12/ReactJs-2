import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ProductThumnail from '../components/ProductThumnail';
import { useMatch } from 'react-router-dom';
import useProductDetail from '../Hooks/useProductDetail';

Detailse.propTypes = {};
const useStyle = makeStyles((theme) => ({
  root: {},

  pagination: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center',
    marginTop: '30px',
    paddingBottom: '20px',
    },
  
    left: {
        width: '400px',
        padding: "12px",
        borderRight: '1px solid grey',
    },
    
    right: {
        flex: '1 1 0',
    }
}));

function Detailse() {
    const classes = useStyle();
    const {params:{productId}} = useMatch("/products/:productId");


    const { product, loading } = useProductDetail(productId);
    if (loading) {
        return <Box>Loading</Box>
    }

    const {data} = product;
  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid
            container
            pacing={2}
          >
            <Grid
              item
                className={classes.left}
              
            >
                <ProductThumnail product={data} />
            </Grid>
            <Grid
              item
                className={classes.right}
            >
              Prouct
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default Detailse;

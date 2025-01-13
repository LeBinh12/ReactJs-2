import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import productsApi from 'Api/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';

function ListPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoding] = useState(true);

  

  useEffect(() => {
    (async () => {

      try {
        const response = await productsApi.getAll();
        console.log("Data", response);
        setProductList(response);
      } catch (error) {
        console.log("Error", error);
      }

      setLoding(false);
      
    })();
  }, []);

    
  return (
    <div>
      <Box>
        <Container>
          <Grid
            container
            spacing={2}
          >
            {/* Cột trái: Chiều rộng cố định */}
            <Grid
              item
              xs={12}
              sm={3}
              sx={{ width: '250px' }}
            >
              <Paper elevation={3}>Left column</Paper>
            </Grid>

            {/* Cột phải: Linh hoạt */}
            <Grid
              item
              xs={12}
              sm={9}
              sx={{ flexGrow: 1 }}
            >
              <Paper elevation={3}>
                {loading ? <ProductSkeletonList /> : <ProductList data={ productList } />}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ListPage;

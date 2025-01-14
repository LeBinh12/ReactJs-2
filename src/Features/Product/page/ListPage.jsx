import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Pagination, Paper, Typography } from '@mui/material';
import productsApi from 'Api/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';

function ListPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoding] = useState(true);
  const [pagination, setPagination] = useState({
    limit: 6,
    total: 10,
    page: 1,
  });
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 6,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productsApi.getAll(filter);

        console.log('Data', data, pagination);
        console.log('Page: ' + pagination.page);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Error', error);
      }

      setLoding(false);
    })();
  }, [filter]);


  const handlePageChange = (e, page) => {
    setFilter((prevFilters) => ({
      ...prevFilters,
      _page: page,  
    }));
  }
  

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
                {loading ? <ProductSkeletonList length={6} /> : <ProductList data={productList} />}

                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                ></Pagination>

              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ListPage;

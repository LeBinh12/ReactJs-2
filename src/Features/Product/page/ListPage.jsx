import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Pagination, Paper, Typography } from '@mui/material';
import productsApi from 'Api/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';
import { makeStyles } from '@mui/styles';
import ProductSort from '../components/ProductSort';
import ProductFilter from '../components/ProductFilter';

const useStyle = makeStyles((theme) => ({
  root: {},

  pagination: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center',
    marginTop: '30px',
    paddingBottom: '20px',
  },
}));

function ListPage() {
  const classes = useStyle();
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
    order: 'asc',
    sort_by: 'price',
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productsApi.getAll(filter);
        console.log("API Response:", data);  // Xem dữ liệu trả về

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
  };

  const handleSortChange = (newSortValue) => {
    setFilter((prevFilters) => ({
      ...prevFilters,
      order: newSortValue,
    }));
  };

  const handleFilterChange = (newFilter) => {
    setFilter((prevFilters) => ({
      ...prevFilters,
      ...newFilter,
    }));
  };

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
              <Paper elevation={3}>
                <ProductFilter filter={filter} onChange={handleFilterChange} />
                
              </Paper>
            </Grid>

            {/* Cột phải: Linh hoạt */}
            <Grid
              item
              xs={12}
              sm={9}
              sx={{ flexGrow: 1 }}
            >
              <Paper elevation={3}>
                <ProductSort
                  currentSort={filter.order}
                  onChange={handleSortChange}
                />

                {loading ? <ProductSkeletonList length={6} /> : <ProductList data={productList} />}
                <Box className={classes.pagination}>
                  <Pagination
                    color="primary"
                    count={Math.ceil(pagination.total / pagination.limit)}
                    page={pagination.page}
                    onChange={handlePageChange}
                  ></Pagination>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ListPage;

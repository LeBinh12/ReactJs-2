import React from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';

function ListPage() {
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
              <Paper elevation={3}>Right Column</Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ListPage;

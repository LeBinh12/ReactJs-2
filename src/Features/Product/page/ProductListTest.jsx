import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import productsApi from 'Api/productApi';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddProducts from 'Features/Auth/components/Products';
import { useEffect } from 'react';


const formatCurrency = (amount) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 30,
    padding: '0 30px',
  },
});

export default function ProductList() {
  const classes = useStyles();
  const [search, setSearch] = React.useState("");
  const [products, setProducts] = React.useState([]);
  const [productId, setProductId] = React.useState(null);
  const [productIdDelete, setProductIdDelete] = React.useState(null);
  const fetchProducts = async () => {
    try {
      const productList = await productsApi.getAll();
      setProducts(productList);
    } catch (error) {
      console.error('Lỗi khi tải sản phẩm:', error);
      alert('Không thể tải danh sách sản phẩm. Vui lòng thử lại sau.');
    }
  };
  

  useEffect(() => {
      fetchProducts();
  }, []);
    
  const handleProductUpdate = async (updatedProduct) => {
    await fetchProducts();  // Sau khi cập nhật thành công, gọi lại fetchProducts để làm mới dữ liệu
    setProductId(null);  // Reset productId nếu cần
  };
    

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
      setOpen(true);
  };
  
    const handleClickAdd = () => {
        handleClickOpen();
        setProductIdDelete(null);
        setProductId(null);
     }
    const handleProductDelete = async () => { 
        await fetchProducts();  
        setProductId(null);
    }
  const handleEdit = (id) => {
    setProductId(id);
    handleClickOpen();
  };
  const handleDelete = (id) => {
    setProductIdDelete(id);
    handleClickOpen();
  };
  console.log(productId);

  return (
    <>
      <Button
        className={classes.root}
        onClick={handleClickAdd}
      >
        Thêm sản phẩm
      </Button>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Hình ảnh</StyledTableCell>
              <StyledTableCell align="right">Mã sản phẩm</StyledTableCell>
              <StyledTableCell align="right">Tên sản phẩm</StyledTableCell>
              <StyledTableCell align="right">Giá</StyledTableCell>
              <StyledTableCell align="right">Chức năng</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell
                  component="th"
                  scope="row"
                >
                  <img
                    src={row.image}
                    alt={row.name}
                    width={100}
                    className={classes.image}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">{row.id}</StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{formatCurrency(row.price)}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    className={classes.root}
                    onClick={() => handleDelete(row.id)}
                  >
                    Xóa
                  </Button>
                  <Button
                    className={classes.root}
                    onClick={() => handleEdit(row.id)}
                  >
                    Sửa
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        disableEscapeKeyDown
        open={open}
        onClose={(event, reason) => {
          if (reason === 'backdropClick') {
            return;
          }
          handleClose();
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <>
              <AddProducts
                closeDialog={handleClose}
                productId={productId}
                productIdDelete={productIdDelete}
                onUpdateSuccess={handleProductUpdate}
                onDeleteSuccess={handleProductDelete}
              />
            </>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

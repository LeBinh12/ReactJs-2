import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AddProductForm from '../ProductForm';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { addProduct, DeleteProduct, updateProduct } from 'Features/Auth/ProductSlice/ProductSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import ProductList from 'Features/Product/page/ProductListTest';
import { useForm } from 'react-hook-form';
import productsApi from 'Api/productApi';

AddProduct.propTypes = {
  closeDialog: PropTypes.func,
  productId: PropTypes.number,
  productIdDelete: PropTypes.number,
  onUpdateSuccess: PropTypes.func,
};

function AddProduct(props) {
  const { productId, productIdDelete, onUpdateSuccess } = props;
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    console.log('Submit', values);
    if (values) {
      // cập nhật sản phẩm
      try {
        if (productId != null) {
          const action = updateProduct(values);
          const resultAction = await dispatch(action);
          const user = unwrapResult(resultAction);

          const { closeDialog } = props;
          if (closeDialog) {
            closeDialog();
          }

          console.log('Sản phẩm mới: ', user);
          enqueueSnackbar('Cập nhật sản phẩm thành công', { variant: 'success' });
          if (onUpdateSuccess) {
            onUpdateSuccess(user);
          }
          console.log('Dữ liệu: ', values);
          console.log('sửa dữ liệu id:' + productId);
        }
        /// Xóa sản phẩm
        else if (productIdDelete != null) {
          try {
            await productsApi.remove(productIdDelete);

            if (onUpdateSuccess) {
              onUpdateSuccess();
            }

            console.log('Xóa dữ liệu id: ' + productIdDelete);
            enqueueSnackbar('Xóa sản phẩm thành công', { variant: 'success' });
          } catch (error) {
            console.error('Lỗi xóa sản phẩm: ', error);
            enqueueSnackbar('Xóa sản phẩm thất bại', { variant: 'error' });
          }
        }
        // thêm sản phẩm
        else {
          const action = addProduct(values);
          const resultAction = await dispatch(action);
          const user = unwrapResult(resultAction);

          const { closeDialog } = props;
          if (closeDialog) {
            closeDialog();
          }

          console.log('Sản phẩm mới: ', user);
          enqueueSnackbar('Thêm tài sản phẩm thành công', { variant: 'success' });
        }
      } catch (error) {
        console.log('Error: ', error);
        enqueueSnackbar(error.message, { variant: 'error' });
      }
    }
  };
  return (
    <div>
      <AddProductForm
        onSubmit={handleSubmit}
        productId={productId}
        productIdDelete={productIdDelete}
      />
    </div>
  );
}

export default AddProduct;

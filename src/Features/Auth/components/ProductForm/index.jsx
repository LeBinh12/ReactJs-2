import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../../../../Components/form-control/InputInfield';
import { Avatar, Button, LinearProgress, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import PasswordField from 'Components/form-control/PasswordField';
import productsApi from 'Api/productApi';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: 15,
  },

  avatar: {
    margin: '0 auto',
  },

  title: {
    textAlign: 'center',
  },

  submit: {},

  progress: {
    position: 'absolute',
    paddingBottom: 1,
    left: 0,  
    right: 0,
  },
}));

AddProductForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddProductForm(props) {

  const { productId, productIdDelete } = props;
  const classes = useStyles();

  const schema = yup.object({
    name: yup
      .string()
      .required('Bạn cần nhập Họ và Tên')
      .test('Tên phải có ít nhất 2 ký tự', 'Tên sản phẩm cần có ít nhất 2 từ', (value) => {
        return value && value.split(' ').length >= 2;
      }),
    price: yup.number().typeError('Giá trị phải là một số')
      .required("Giá tiền không được để trống")
      .positive('Giá trị phải là số dương'),
  });

  const form = useForm({
    defaultValues: {
      name: '',
      price: '',
      image: '',
      id: '',
    },
    resolver: yupResolver(schema),
  });

  const { setValue } = form;

useEffect(() => {
  if (productId) {
    const fetchProduct = async () => {
      try {
        const product = await productsApi.get(productId); // API lấy sản phẩm
        setValue('name', product.name || '');
        setValue('price', product.price || '');
        setValue('image', product.image || '');
        setValue('id', product.id || '');
      } catch (error) {
        console.error('Failed to fetch product: ', error);
      }
    };

    fetchProduct();
  }
}, [productId, setValue]); // Không cần dùng `productIdDelete` ở đây


  const handleSubmit = async (value) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(value);
    }
  };

  const { isSubmitting } = form.formState;

  // Xác định trạng thái
  let status;
  if (productIdDelete) status = "Xóa sản phẩm";
  else if (productId) status = "sửa sản phẩm";
  else status = "Thêm sản phẩm";
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.title}>
        {status}
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="id" disabled form={form} label="Mã sản phẩm" />
        <InputField name="name" form={form} label="Tên sản phẩm" />
        <InputField name="price" form={form} label="Giá" />
        <PasswordField name="image" form={form} label="Link ảnh" />

        <Button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          size="large"
        >
          {status}
        </Button>
      </form>
    </div>
  );
}

export default AddProductForm;

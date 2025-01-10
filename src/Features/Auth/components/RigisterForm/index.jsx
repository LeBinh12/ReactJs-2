import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../../../../Components/form-control/InputInfield';
import { Avatar, Button, LinearProgress, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import PasswordField from 'Components/form-control/PasswordField';

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

RigisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RigisterForm(props) {
  const classes = useStyles();

  const schema = yup.object({
    // title: yup.string().required('Bạn cần nhập Họ và Tên').min(5, 'Bạn cần nhập trên 5 ký tự'),
    fullname: yup
      .string()
      .required('Bạn cần nhập Họ và Tên')
      .test('Bạn cần nhập 2 ký tự trở lên', 'Bạn đã cần phải nhập Họ và tên', (value) => {
        console.log('value', value);
        return value.split(' ').length >= 2;
      }),
    email: yup.string().required('Bạn cần nhập email').email('Bạn cần nhập địa chỉ email của bạn'),
    password: yup.string().required('Bạn cần nhập mật khẩu').min(6, 'Bạn cần nhập trên 6 ký tự'),

    changePassword: yup
      .string()
      .required('Bạn cần nhập lại mật khẩu!')
      .oneOf([yup.ref('password')], "Mật khẩu của bạn không trùng khớp"),
  });

  const form = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      changePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (value) => {
    // console.log('Todo Form: ', value);

    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(value);
    }

    form.reset();
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>

      {isSubmitting && <LinearProgress className={ classes.progress } />}


      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography
        component="h3"
        variant="h5"
        className={classes.title}
      >
        Tạo tài khoản
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField
          name="fullname"
          form={form}
          label="Họ và tên"
        />
        <InputField
          name="email"
          form={form}
          label="Email"
        />
        <PasswordField
          name="password"
          form={form}
          label="Mật khẩu"
        />
        <PasswordField
          name="changePassword"
          form={form}
          label="Nhập lại mật khẩu"
        />
        <Button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Tạo tài khoản
        </Button>
      </form>
    </div>
  );
}

export default RigisterForm;

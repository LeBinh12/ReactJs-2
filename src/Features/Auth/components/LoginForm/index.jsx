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

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyles();

  const schema = yup.object({
    // title: yup.string().required('Bạn cần nhập Họ và Tên').min(5, 'Bạn cần nhập trên 5 ký tự'),

    email: yup.string().required('Bạn cần nhập email').email('Bạn cần nhập địa chỉ email của bạn'),
    password: yup.string().required('Bạn cần nhập mật khẩu'),
  });

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (value) => {
    // console.log('Todo Form: ', value);

    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(value);
    }
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
        Đăng nhập
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
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
        <Button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          size='large'
        >
          Tạo tài khoản
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;

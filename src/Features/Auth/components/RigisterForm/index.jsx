import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../../../../Components/form-control/InputInfield';
import { Avatar, Button, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import PasswordField from 'Components/form-control/PasswordField';


const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: 15
  },

  avatar: {
    margin: '0 auto',
  },

title: {
      textAlign: 'center'
  },

    submit: {
  },
}));

RigisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RigisterForm(props) {
  const classes = useStyles();

  const schema = yup.object({
    // title: yup.string().required('Bạn cần nhập Họ và Tên').min(5, 'Bạn cần nhập trên 5 ký tự'),
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

  const handleSubmit = (value) => {
    // console.log('Todo Form: ', value);

    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(value);
    }

    form.reset();
  };
  return (
    <div className={classes.root}>
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
          type='submit'
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

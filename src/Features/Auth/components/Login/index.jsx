import React from 'react';
import RigisterForm from '../RigisterForm';
import { useDispatch } from 'react-redux';
import { login, register } from 'Features/Auth/UserSilce';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';
Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
      try {          
          const action = login(values);
          const resultAction = await dispatch(action);
          const user = unwrapResult(resultAction);

        const { closeDialog } = props;
        if (closeDialog) {
          closeDialog();
        }
        
          console.log('New User: ', user);
          enqueueSnackbar("Đăng nhập thành công!!", {variant: 'success'})
      } catch (error) {
        console.log('Error: ', error);
        enqueueSnackbar(error.message, {variant: 'error'});

    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;

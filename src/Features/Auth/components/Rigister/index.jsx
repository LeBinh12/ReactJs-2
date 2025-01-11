import React from 'react';
import RigisterForm from '../RigisterForm';
import { useDispatch } from 'react-redux';
import { register } from 'Features/Auth/UserSilce';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
      try {          
          const action = register(values);
          const resultAction = await dispatch(action);
          const user = unwrapResult(resultAction);

        const { closeDialog } = props;
        if (closeDialog) {
          closeDialog();
        }
        
          console.log('New User: ', user);
          enqueueSnackbar("Tạo tài khoản thành công!!", {variant: 'success'})
      } catch (error) {
        console.log('Error: ', error);
        enqueueSnackbar(error.message, {variant: 'error'});

    }
  };

  return (
    <div>
      <RigisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;

import React from 'react';
import RigisterForm from '../RigisterForm';
import { useDispatch } from 'react-redux';
import { register } from 'Features/Auth/UserSilce';
import { unwrapResult } from '@reduxjs/toolkit';

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
      try {          
          const action = register(values);
          const resultAction = await dispatch(action);
          const user = unwrapResult(resultAction);
          console.log('New User: ', user);
      } catch (error) {
          console.log('Error: ', error);
    }
  };

  return (
    <div>
      <RigisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;

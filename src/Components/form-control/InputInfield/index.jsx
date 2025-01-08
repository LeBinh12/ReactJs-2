import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;

  const {
    formState: { errors },
    } = form;
    
    const hasError = !!errors[name]; // Kiểm tra lỗi của trường hiện tại
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          disabled={disabled}
          error={hasError}
          helperText={hasError ? errors[name]?.message : ''}
        />
      )}
    />
  );
}

export default InputField;

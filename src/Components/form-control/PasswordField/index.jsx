import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disabled } = props;

  const {
    formState: { errors },
  } = form;

  const hasError = !!errors[name]; // Kiểm tra lỗi của trường hiện tại

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormControl
          fullWidth
          margin="normal"
          variant="outlined"
          error={hasError} // Hiển thị trạng thái lỗi
        >
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <OutlinedInput
            {...field}
            id={name}
            type={showPassword ? 'text' : 'password'}
            label={label}
            disabled={disabled}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? 'hide the password' : 'display the password'}
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>
            {hasError ? errors[name]?.message : ''}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
}

export default PasswordField;

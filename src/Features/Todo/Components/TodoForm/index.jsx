import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../Components/form-control/InputInfield';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object({
      title: yup.string()
          .required('Bạn cần nhập Họ và Tên')
        .min(5, "Bạn cần nhập trên 5 ký tự"),
  });

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (value) => {
    // console.log('Todo Form: ', value);

    const {onSubmit} = props;
    if (onSubmit) {
      onSubmit(value);
    }

    form.reset();
    
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField
        name="title"
        form={form}
        label="Nhập tên bạn"
      />
    </form>
  );
}

export default TodoForm;

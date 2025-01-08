import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../Components/form-control/InputInfield';
import { useForm } from 'react-hook-form';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const form = useForm({
        defaultValues: {
            title: '',
        }
    });

    const handleSubmit = (value) => {
        console.log('Todo Form: ', value);
    };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" form={form} lable="Todo" />
    </form>
  );
}

export default TodoForm;

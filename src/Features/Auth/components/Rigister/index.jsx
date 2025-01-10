import React from 'react';
import RigisterForm from '../RigisterForm';

Register.propTypes = {
    
};

function Register(props) {
    const handleSubmit = (values) => { 
        console.log("Form submit: ", values);
    }

    return (
        <div>
            <RigisterForm onSubmit={ handleSubmit } />
        </div>
    );
}

export default Register;
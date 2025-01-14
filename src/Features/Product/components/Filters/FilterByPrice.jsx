import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@mui/material';

FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

function FilterByPrice({onChange}) {
    const [values, setValues] = useState({
        price_min: 0,
        price_max: 0,
    });

    const handleChange = (e) => {

        const { name, value } = e.target; // laays cac data can thiet o TextField

        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        if(onChange) onChange(values);

        setValues({
            price_min: 0,
            price_max: 0,
        })
    }

    return (
        <Box>
            <Typography variant='subtitle2'>Lọc theo giá</Typography>

            <Box>
                <TextField name="price_min" value={values.price_min} onChange={ handleChange } />
                <span>-</span>
                <TextField name="price_max"  value={values.price_max} onChange={ handleChange }/>
            </Box>
            <Button variant='outlined' color='primary' onClick={handleSubmit}>Lọc</Button>
        </Box>
    );
}

export default FilterByPrice;
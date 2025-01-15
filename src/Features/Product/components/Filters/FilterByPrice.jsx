import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};


const useStyle = makeStyles((theme) => ({
    root: {
        padding: '16px',
        borderTop: '1px solid grey'
    },
    range: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',

        marginTop: '8px',
        marginBottom: '8px',

        '& > span': {
            marginLeft: '8px',
            marginRight: '8px',
        }
    },
}))

function FilterByPrice({ onChange }) {
    
    const classes = useStyle();


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
        <Box className={classes.root}>
            <Typography variant='subtitle2'>Lọc theo giá</Typography>

            <Box className={classes.range}>
                <TextField name="price_min"  value={values.price_min} onChange={ handleChange } />
                <span>-</span>
                <TextField name="price_max"  value={values.price_max} onChange={ handleChange }/>
            </Box>
            <Button variant='outlined' color='primary' size='small' onClick={handleSubmit}>Lọc</Button>
        </Box>
    );
}

export default FilterByPrice;
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilter.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilter({ filters, onChange }) {
    
    const handleCategoryChange = (newCategoryId) => {
        if(!onChange) return;

        const newFilter = {
            'category_id': newCategoryId,
        };

        onChange(newFilter);
    };

    const handleChange = (values) => {
        if (!onChange) return;
        console.log("Data:", values);
        onChange(values);
    };
    

    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange} />
            <FilterByPrice onChange={handleChange} />
            <FilterByService filters={filters} onChange={handleChange}/>
        </Box>
    );
}

export default ProductFilter;
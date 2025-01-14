import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterByCategory from './Filters/FilterByCategory';

ProductFilter.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilter({ filters, onChange }) {
    
    const handleCategoryChange = (newCategoryId) => {
        console.log("id: " + newCategoryId)
        if(!onChange) return;

        const newFilter = {
            ...filters,
            'category_id': newCategoryId,
        };

        onChange(newFilter);
    };
    



    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange} />
        </Box>
    );
}

export default ProductFilter;
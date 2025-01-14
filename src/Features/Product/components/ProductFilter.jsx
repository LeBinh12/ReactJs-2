import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';

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

    const handlePriceChange = (values) => {
        if (!onChange) return;
        onChange(values);
    };
    



    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange} />
            <FilterByPrice onChange={handlePriceChange} />
        </Box>
    );
}

export default ProductFilter;
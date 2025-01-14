import React from 'react';
import PropTypes from 'prop-types';
import { Box, Skeleton, Typography } from '@mui/material';

Product.propTypes = {
    product: PropTypes.object
};


function Product({ product }) {
    const thumbnail = product.image ? product.image : "https://placehold.jp/200x200.png";

    return (
        <div>
            <Box padding={1}>
                <Box padding={1} minHeight="215px">
                    <img src={thumbnail
                        
                } alt={product.name} width="100%" />
                </Box>
                <Typography variant="body2">{product.name}</Typography>
                <Typography variant="body2">
                    <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                        {  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price,)}
                    </Box>
                    {product.sale > 0 ?`-${product.sale}%` : ""}
                
                </Typography>
            </Box>
        </div>
    );
}

export default Product;
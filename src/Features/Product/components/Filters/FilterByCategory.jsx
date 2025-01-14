import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import categoriesApi from 'Api/categoriesApi';
import { makeStyles } from '@mui/styles';

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};


const useStyle = makeStyles((theme) => ({
    root: {
        padding: "16px"
    },

    menu: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',
        '& > li': {
            marginTop: "8px",
            transition: 'all .25s',
            '&:hover': {
                color: "chocolate",
                cursor: "pointer",
            }
        }
    },
}))

function FilterByCategory({onChange}) {

    const [categoryList, SetCategoryList] = useState([]);
    const classes = useStyle();

    useEffect(() => {
        (async () => {
            try {
                const {data} = await categoriesApi.getAll();
                SetCategoryList(data);
                
            } catch (err) { 
                console.error("Lỗi: ", err);
            }
        })()
    }, [])


    const handleCategoryClick = (category) => {
        if (onChange) {
            onChange(category.category_id);
        }
    }

    return (
        <Box className={classes.root}>
            <Typography variant='subtitle2'> Danh mục sản phẩm</Typography>
            <ul className={classes.menu}>
                {categoryList.map(category =>
                    <li key={category.category_id} onClick={() => handleCategoryClick(category)}>
                        <Typography variant='body2'>{category.category_name}</Typography>
                    </li>
                )}
            </ul>
      </Box>
    );
}

export default FilterByCategory;
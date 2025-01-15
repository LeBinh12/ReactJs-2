import React from 'react';
import PropTypes from 'prop-types';
import { Box, FormControlLabel, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Checkbox from '@mui/material/Checkbox';

FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

const useStyle = makeStyles(() => ({
  root: {
    padding: '16px',
    borderTop: '1px solid grey',
  },
  list: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    '& > li': {
      marginTop: '8px',
      margin: 0,
    },
  },
}));

function FilterByService({ filters = {}, onChange }) {
  const classes = useStyle();

  const handleChange = (e) => {
    if (!onChange) return;
      const { name, checked } = e.target;
      console.log("data: ", { [name]: checked });  // Trả về đối tượng với key là "isPromotion" hoặc "isFreeShip"
      onChange({ [name]: checked });
  };

  return ( 
    <Box className={classes.root}>
      <Typography variant="subtitle2">Dịch vụ</Typography>
      <ul className={classes.list}>
        {[
          { name: "isFreeShip", label: 'Miễn phí vận chuyển' },
          { name: "isPromotion", label: 'Khuyến mãi' },
        ].map((service) => (
          <li key={service.name}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters[service.name]}
                  onChange={handleChange}
                  name={service.name}
                  color="primary"
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;

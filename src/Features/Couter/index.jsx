import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './CouterSilce';
import styles from './style.module.css';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 30,
    padding: '0 30px',
  },
});


CounterFeature.propTypes = {};

function CounterFeature(props) {
  const classes = useStyles();

  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    const action = increase();
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease();
    dispatch(action);
  };


  return (
    <>
    <div className={styles.counter}>
      Count: {counter}
      <div>
        <Button
          className={classes.root}
          onClick={handleIncreaseClick}
        >
          Add 1
        </Button>
        <Button
          className={classes.root}
          onClick={handleDecreaseClick}
        >
          Tru 1
        </Button>
      </div>

        
      </div>
    </>



  );
}

export default CounterFeature;

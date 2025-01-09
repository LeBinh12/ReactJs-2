import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import { NavLink, Link } from 'react-router-dom';
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
    link: {
        textDecoration: 'none',
        color: 'white',
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <GitHubIcon className={classes.menuButton} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link to="/" className={classes.link}>Shọp pe</Link>
          </Typography>
          <NavLink className={classes.link} to="/todos">
            <Button color="inherit">Todo</Button>
          </NavLink>

          <NavLink className={classes.link} to="/albums">
            <Button color="inherit">Album</Button>
          </NavLink>

          <Button color="inherit">Đăng ký</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

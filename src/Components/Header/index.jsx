import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import { NavLink, Link } from 'react-router-dom';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Register from '../../Features/Auth/components/Rigister';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import Login from 'Features/Auth/components/Login';
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
  },
  closeButton: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    color: 'grey',
    zIndex: 1,
  },
});

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
}

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState(MODE.LOGIN);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <Link
              to="/"
              className={classes.link}
            >
              Shọp pe
            </Link>
          </Typography>
          <NavLink
            className={classes.link}
            to="/todos"
          >
            <Button color="inherit">Todo</Button>
          </NavLink>

          <NavLink
            className={classes.link}
            to="/albums"
          >
            <Button color="inherit">Album</Button>
          </NavLink>

          <Button color="inherit" onClick={handleClickOpen}>Đăng ký</Button>
        </Toolbar>
      </AppBar>

      <Dialog
        disableEscapeKeyDown
        open={open}
        onClose={(event, reason) => {
            if (reason === 'backdropClick') {
              return;
            }
            handleClose();
          }}        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {mode === MODE.REGISTER && (
              <>
                <Register closeDialog={handleClose} />
                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                      Khi bạn có tài khoản, hãy đăng nhập ở đây
                  </Button>
                </Box>
              </>
            )}

            {mode === MODE.LOGIN && (
              <>
            <Login closeDialog={ handleClose } />
            <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                      Nếu bạn chưa có tài khoản, hày tạo tài khoản ở đây
                  </Button>
                </Box>
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

import { AppBar, Icon, makeStyles, Menu } from "@material-ui/core";
import { AccountCircle, Home, Person } from "@material-ui/icons";
import { IconButton, MenuItem, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { NavLink } from "react-router-dom";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import { Logout } from "@mui/icons-material";
import logo from "../assets/logo_transparent.png";
import useAuthContext from "../hooks/useAuthContext";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: "#424242",
    display: "flex",
    justifyContent: "space-around",
  },
  navlink: {
    display: "flex",
    alignItems: "center",

    color: "#ff5722",
  },
  menuIcon: {
    display: "flex",
    color: "#ff5722",
  },
}));
const Navbar = () => {
  const { user, isLoggedIn, logout } = useAuthContext();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [auth, setAuth] = React.useState(true);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <img src={logo} style={{ width: 80 }} />
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
        <NavLink className={classes.navlink} to="/">
          <Home />
          HomePage
        </NavLink>
        <NavLink className={classes.navlink} to="/landingpage">
          <DashboardCustomizeOutlinedIcon />
          Landingpage
        </NavLink>
        <NavLink className={classes.navlink} to="/landingpage">
          <Person />
          {isLoggedIn && user.first_name}
        </NavLink>
        {isLoggedIn ? (
          <IconButton onClick={logout}>
            <Logout className={classes.navlink} />
          </IconButton>
        ) : (
          <NavLink className={classes.navlink} to="/auth/login">
            Sign in
          </NavLink>
        )}

        {auth && (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

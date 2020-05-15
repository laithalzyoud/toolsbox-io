import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/logo/toolsboxio-logo.png";
import { Toolbar } from "@material-ui/core";

const useStyles = makeStyles({
  logo: {
    maxWidth: 160,
  },
  appbar: {
    alignItems: "center",
  },
});

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="inherit" className={classes.appbar}>
      <Toolbar>
        <img alt="toolsbox.io" src={Logo} href={"/"} className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

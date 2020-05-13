import React from "react";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
// import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../assets/logo/toolsboxio-logo.png";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarLogo: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbarLogo}>
          <a href="/">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "15%", height: "15%" }}
              href={"/"}
            />
          </a>
        </div>
        <nav>
          <Link
            variant="button"
            color="textPrimary"
            href="/donate"
            className={classes.link}
          >
            Donate
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="/report-issue"
            className={classes.link}
          >
            Report issue
          </Link>
        </nav>
        {/* <Button href="#" color="primary" variant="outlined" className={classes.link}>
        Login
    </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

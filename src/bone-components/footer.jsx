import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://toolsbox.io/">
        toolsbox.io
      </Link>{" "}
      {new Date().getFullYear()}.
      <IconButton
        aria-label="Send email"
        onClick={() => window.open("mailto:laith.alzyoud@icloud.com")}
      >
        <MailIcon
          fontSize="large"
          style={{ verticalAlign: "middle", display: "inline-flex" }}
        />
      </IconButton>
    </Typography>
  );
}

const footers = [
  {
    title: "Help us improve",
    description: [
      ["Donate", "/donate"],
      ["Report Issue", "/report-issue"],
    ],
  },
  {
    title: "Legal",
    description: [
      ["Privacy policy", "/privacy"],
      ["Terms of use", "/terms"],
    ],
  },
];

const Footer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
      <Grid container spacing={4} justify="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              <nav>
                {footer.description.map((item) => (
                  <li key={item[0]}>
                    <Link
                      to={item[1]}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {item[0]}
                    </Link>
                  </li>
                ))}
              </nav>
            </ul>
          </Grid>
        ))}
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Footer;

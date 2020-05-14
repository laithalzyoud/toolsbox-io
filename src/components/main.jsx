import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Layout from "../bone-components/layout";
import { tools } from "../configs/main-tools";
import { Link } from "react-router-dom";

const styles = () => ({
  heroContent: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  cardHeader: {
    backgroundColor: "white",
  },
  cardIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: 2,
  },
  linkStyle: {
    textDecoration: "none",
  },
});

class Main extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <Container
          maxWidth="sm"
          component="main"
          className={classes.heroContent}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Your everyday tools
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            In one place
          </Typography>
        </Container>
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tools.map((tool) => (
              <Grid item key={tool.title} xs={12} sm={12} md={4}>
                <Link className={classes.linkStyle} to={tool.link}>
                  <Card>
                    <CardHeader
                      title={tool.title}
                      subheader={tool.subheader}
                      titleTypographyProps={{ align: "center" }}
                      subheaderTypographyProps={{ align: "center" }}
                      className={classes.cardHeader}
                    />
                    <CardContent className={classes.cardIcon}>
                      {tool.icon}
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Layout>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);

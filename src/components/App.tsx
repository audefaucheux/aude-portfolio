import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

// import "./App.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    // menuButton: {
    //   marginRight: theme.spacing(2),
    // },
    title: {
      flexGrow: 1,
    },
  })
);

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Typography variant="h6" className={classes.title}>
          HOME
        </Typography>
        <LinkedInIcon />
        <GitHubIcon />
      </AppBar>
      Aude Portfolio
    </div>
  );
};

export default App;

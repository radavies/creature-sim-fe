import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';

import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';

import Home from './pages/Home';
import Create from './pages/Create';
import World from './pages/World';
import About from './pages/About';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              component={Link}
              to="/"
            >
              <HomeIcon />
              <span className="header-icon-text">Home</span>
            </IconButton>

            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              component={Link}
              to="/about"
            >
              <InfoIcon />
              <span className="header-icon-text">About</span>
            </IconButton>
            <h3 className="header-title">Creature Sim</h3>
          </Toolbar>
        </AppBar>

        <Router>
          <Home path="/" />
          <Create path="/create" />
          <World path="/world" />
          <About path="/about" />
        </Router>
      </div>
    </Fragment>
  );
};

render(<App />, document.getElementById('root'));

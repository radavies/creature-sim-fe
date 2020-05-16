import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';

import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';

import Home from './pages/home/Home';
import Create from './pages/create/Create';

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
            </IconButton>
            <h3>Creature Sim</h3>
          </Toolbar>
        </AppBar>

        <Router>
          <Home path="/" />
          <Create path="/create" />
        </Router>
      </div>
    </Fragment>
  );
};

render(<App />, document.getElementById('root'));

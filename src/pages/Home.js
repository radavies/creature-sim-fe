import React, { Component } from 'react';
import { Link } from '@reach/router';
import Button from '@material-ui/core/Button';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <Button
          className="grid-center"
          variant="contained"
          color="primary"
          component={Link}
          to="/create"
        >
          Create a new creature
        </Button>
      </div>
    );
  }
}
export default Home;

import React, { Component } from 'react';

import CreateForm from '../components/CreateForm';

class Create extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <CreateForm />
      </div>
    );
  }
}
export default Create;

import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';

import CreatureAvatar from './CreatureAvatar';

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creatureName: '',
      creatorName: '',
      avatarHash: '',
      showAvatar: false,
      updateAvatar: false,
    };
    this.creatureNameChange = this.creatureNameChange.bind(this);
    this.creatorNameChange = this.creatorNameChange.bind(this);
    this.setAvatarState = this.setAvatarState.bind(this);
  }

  creatureNameChange(newName) {
    this.setState({
      creatureName: newName,
      updateAvatar: false,
    });
  }

  creatorNameChange(newName) {
    this.setState({
      creatorName: newName,
      updateAvatar: false,
    });
  }

  setAvatarState() {
    const { creatureName, creatorName } = this.state;
    let showAvatar = false;
    if (creatureName !== '' && creatorName !== '') {
      showAvatar = true;
    }
    this.setState({
      showAvatar: showAvatar,
      updateAvatar: true,
    });
  }

  render() {
    const { creatureName, creatorName, showAvatar, updateAvatar } = this.state;

    return (
      <form
        className="grid-middle-one form-container"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <CreatureAvatar
          showAvatar={showAvatar}
          updateAvatar={updateAvatar}
          creatureName={creatureName}
          creatorName={creatorName}
        />

        <TextField
          id="creaturename"
          label="Creature Name"
          variant="outlined"
          value={creatureName}
          className="grid-form-items"
          onChange={(e) => this.creatureNameChange(e.target.value)}
          onBlur={(e) => this.setAvatarState(e)}
        />
        <TextField
          id="creatorname"
          label="Your Name"
          variant="outlined"
          value={creatorName}
          className="grid-form-items"
          onChange={(e) => this.creatorNameChange(e.target.value)}
          onBlur={(e) => this.setAvatarState(e)}
        />
        <Button variant="contained" color="primary" className="grid-form-items">
          Create {creatureName}
        </Button>
      </form>
    );
  }
}
export default CreateForm;

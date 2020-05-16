import React, { Component } from 'react';
import { Button, TextField, Slider, Badge } from '@material-ui/core';

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
      skillPointsMax: 9,
      skillPointsLeft: 5,
      strengthPoints: 1,
      attackPoints: 1,
      defencePoints: 1,
      speedPoints: 1,
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

  valuetext(value) {
    return value;
  }

  strengthChange(event, value) {
    const {
      skillPointsMax,
      attackPoints,
      defencePoints,
      speedPoints,
    } = this.state;

    if (
      this.checkSkillPoints(
        value,
        attackPoints,
        defencePoints,
        speedPoints,
        skillPointsMax
      )
    ) {
      this.setState({
        strengthPoints: value,
        skillPointsLeft:
          skillPointsMax - (value + attackPoints + defencePoints + speedPoints),
      });
    }
  }

  attackChange(event, value) {
    const {
      skillPointsMax,
      strengthPoints,
      defencePoints,
      speedPoints,
    } = this.state;

    if (
      this.checkSkillPoints(
        strengthPoints,
        value,
        defencePoints,
        speedPoints,
        skillPointsMax
      )
    ) {
      this.setState({
        attackPoints: value,
        skillPointsLeft:
          skillPointsMax -
          (strengthPoints + value + defencePoints + speedPoints),
      });
    }
  }

  defenceChange(event, value) {
    const {
      skillPointsMax,
      strengthPoints,
      attackPoints,
      speedPoints,
    } = this.state;

    if (
      this.checkSkillPoints(
        strengthPoints,
        attackPoints,
        value,
        speedPoints,
        skillPointsMax
      )
    ) {
      this.setState({
        defencePoints: value,
        skillPointsLeft:
          skillPointsMax -
          (strengthPoints + attackPoints + value + speedPoints),
      });
    }
  }

  speedChange(event, value) {
    const {
      skillPointsMax,
      strengthPoints,
      attackPoints,
      defencePoints,
    } = this.state;

    if (
      this.checkSkillPoints(
        strengthPoints,
        attackPoints,
        defencePoints,
        value,
        skillPointsMax
      )
    ) {
      this.setState({
        speedPoints: value,
        skillPointsLeft:
          skillPointsMax -
          (strengthPoints + attackPoints + defencePoints + value),
      });
    }
  }

  checkSkillPoints(
    strengthPoints,
    attackPoints,
    defencePoints,
    speedPoints,
    skillPointsMax
  ) {
    if (
      strengthPoints + attackPoints + defencePoints + speedPoints >
      skillPointsMax
    ) {
      return false;
    }
    return true;
  }

  render() {
    const {
      creatureName,
      creatorName,
      showAvatar,
      updateAvatar,
      skillPointsLeft,
      strengthPoints,
      attackPoints,
      defencePoints,
      speedPoints,
    } = this.state;

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
        <div className="grid-form-items form-item-center">
          Skill points left to spend:{' '}
          <span className="skillPoints">{skillPointsLeft}</span>
        </div>
        <label className="grid-form-items" htmlFor="strength">
          Strength
          <Slider
            id="strength"
            getAriaValueText={this.valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            value={strengthPoints}
            onChange={(e, v) => this.strengthChange(e, v)}
          />
        </label>
        <label className="grid-form-items" htmlFor="attack">
          Attack
          <Slider
            id="attack"
            getAriaValueText={this.valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            value={attackPoints}
            onChange={(e, v) => this.attackChange(e, v)}
          />
        </label>
        <label className="grid-form-items" htmlFor="defence">
          Defence
          <Slider
            id="defence"
            getAriaValueText={this.valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            value={defencePoints}
            onChange={(e, v) => this.defenceChange(e, v)}
          />
        </label>
        <label className="grid-form-items" htmlFor="speed">
          Speed
          <Slider
            id="speed"
            getAriaValueText={this.valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            value={speedPoints}
            onChange={(e, v) => this.speedChange(e, v)}
          />
        </label>
        <Button variant="contained" color="primary" className="grid-form-items">
          Create {creatureName}
        </Button>
      </form>
    );
  }
}
export default CreateForm;

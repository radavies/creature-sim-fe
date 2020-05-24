import React, { Component, Fragment } from 'react';
import { Button, TextField, CircularProgress } from '@material-ui/core';
import { navigate } from '@reach/router';

import { CreateCreature } from '../utils/Network';

import CreatureAvatar from './CreatureAvatar';
import SliderWithRules from './SliderWithRules';
import SimpleSnackbar from './SimpleSnackbar';
import SnackbarProvider from './SnackbarProvider';

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creatureName: '',
      creatorName: '',
      showAvatar: false,
      updateAvatar: false,
      skillPointsMax: 9,
      skillPointsMaxLevel: 3,
      skillPointsLeft: 5,
      strengthPoints: 1,
      attackPoints: 1,
      defencePoints: 1,
      speedPoints: 1,
      creatureNameError: false,
      creatorNameError: false,
      creatureErrorHelper: '',
      creatorErrorHelper: '',
      formLoading: false,
      networkError: false,
    };
    this.submitFormSuccess = this.submitFormSuccess.bind(this);
    this.submitFormError = this.submitFormError.bind(this);
    this.closeCallback = this.closeCallback.bind(this);
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

  creatureOnBlur() {
    this.creatureValidate();
    this.setAvatarState();
  }

  creatorOnBlur() {
    this.creatorValidate();
    this.setAvatarState();
  }

  creatureValidate() {
    const { creatureName } = this.state;
    let creatureNameError = false;
    let helperText = '';
    if (creatureName === '') {
      creatureNameError = true;
      helperText = 'Your creature needs a name.';
    }
    this.setState({
      creatureNameError: creatureNameError,
      creatureErrorHelper: helperText,
    });
    return !creatureNameError;
  }

  creatorValidate() {
    const { creatorName } = this.state;
    let creatorNameError = false;
    let helperText = '';
    if (creatorName === '') {
      creatorNameError = true;
      helperText = 'Please enter your name.';
    }
    this.setState({
      creatorNameError: creatorNameError,
      creatorErrorHelper: helperText,
    });
    return !creatorNameError;
  }

  skillPointsValidate() {
    const { skillPointsLeft } = this.state;
    let skillPointsError = false;
    if (skillPointsLeft !== 0) {
      skillPointsError = true;
    }
    this.setState({
      skillPointsError: skillPointsError,
    });
    return !skillPointsError;
  }

  skillPointsValidateRemoveOnly() {
    const { skillPointsLeft, skillPointsError } = this.state;
    if (skillPointsError) {
      if (skillPointsLeft === 0) {
        this.setState({
          skillPointsError: false,
        });
      }
    }
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

  strengthCallBack(value) {
    this.skillPointsValidateRemoveOnly();
    const {
      skillPointsMax,
      attackPoints,
      defencePoints,
      speedPoints,
    } = this.state;

    this.setState({
      strengthPoints: value,
      skillPointsLeft:
        skillPointsMax - (value + attackPoints + defencePoints + speedPoints),
    });
  }

  attackCallBack(value) {
    this.skillPointsValidateRemoveOnly();
    const {
      skillPointsMax,
      strengthPoints,
      defencePoints,
      speedPoints,
    } = this.state;

    this.setState({
      attackPoints: value,
      skillPointsLeft:
        skillPointsMax - (value + strengthPoints + defencePoints + speedPoints),
    });
  }

  defenceCallBack(value) {
    this.skillPointsValidateRemoveOnly();
    const {
      skillPointsMax,
      strengthPoints,
      attackPoints,
      speedPoints,
    } = this.state;

    this.setState({
      defencePoints: value,
      skillPointsLeft:
        skillPointsMax - (value + strengthPoints + attackPoints + speedPoints),
    });
  }

  speedCallBack(value) {
    this.skillPointsValidateRemoveOnly();
    const {
      skillPointsMax,
      strengthPoints,
      attackPoints,
      defencePoints,
    } = this.state;

    this.setState({
      speedPoints: value,
      skillPointsLeft:
        skillPointsMax -
        (value + strengthPoints + attackPoints + defencePoints),
    });
  }

  submitForm() {
    const creatureValid = this.creatureValidate();
    const creatorValid = this.creatorValidate();
    const skillPointsValid = this.skillPointsValidate();
    const valid = creatureValid && creatorValid && skillPointsValid;

    const {
      creatureName,
      creatorName,
      strengthPoints,
      attackPoints,
      defencePoints,
      speedPoints,
    } = this.state;

    if (valid) {
      this.setState({ formLoading: true, networkError: false });

      CreateCreature(
        creatureName,
        creatorName,
        strengthPoints,
        attackPoints,
        defencePoints,
        speedPoints,
        this.submitFormSuccess,
        this.submitFormError
      );
    }
  }

  submitFormSuccess(response) {
    navigate(`/world?creature=${response.data}`);
  }

  submitFormError() {
    this.setState({ formLoading: false, networkError: true });
  }

  closeCallback() {
    this.setState({ networkError: false });
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
      skillPointsMaxLevel,
      skillPointsMax,
      creatureNameError,
      creatorNameError,
      creatureErrorHelper,
      creatorErrorHelper,
      skillPointsError,
      formLoading,
      networkError,
    } = this.state;

    return (
      <Fragment>
        <SnackbarProvider.Provider
          value={{ isOpen: networkError, closeCallback: this.closeCallback }}
        >
          <SimpleSnackbar />
        </SnackbarProvider.Provider>
        <form
          className="grid-middle-one form-container"
          onSubmit={(e) => {
            e.preventDefault();
            this.submitForm();
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
            onBlur={(e) => this.creatureOnBlur(e)}
            error={creatureNameError}
            helperText={creatureErrorHelper}
          />
          <TextField
            id="creatorname"
            label="Your Name"
            variant="outlined"
            value={creatorName}
            className="grid-form-items"
            onChange={(e) => this.creatorNameChange(e.target.value)}
            onBlur={(e) => this.creatorOnBlur(e)}
            error={creatorNameError}
            helperText={creatorErrorHelper}
          />
          <div className="grid-form-items form-item-center">
            Max skill level:{' '}
            <span className="maxLevel">{skillPointsMaxLevel}</span>
          </div>
          <div className="grid-form-items form-item-center">
            Skill points left to spend:{' '}
            <span className="skillPoints">{skillPointsLeft}</span>
          </div>

          {skillPointsError && (
            <div className="form-item-center grid-form-items formError">
              Please use all of your available skill points.
            </div>
          )}

          <SliderWithRules
            labelText="Strength"
            myValue={strengthPoints}
            otherValueOne={attackPoints}
            otherValueTwo={defencePoints}
            otherValueThree={speedPoints}
            skillPointsMax={skillPointsMax}
            skillPointsMaxLevel={skillPointsMaxLevel}
            onUpdateCallBack={(value) => this.strengthCallBack(value)}
          />

          <SliderWithRules
            labelText="Attack"
            myValue={attackPoints}
            otherValueOne={strengthPoints}
            otherValueTwo={defencePoints}
            otherValueThree={speedPoints}
            skillPointsMax={skillPointsMax}
            skillPointsMaxLevel={skillPointsMaxLevel}
            onUpdateCallBack={(value) => this.attackCallBack(value)}
          />

          <SliderWithRules
            labelText="Defence"
            myValue={defencePoints}
            otherValueOne={strengthPoints}
            otherValueTwo={attackPoints}
            otherValueThree={speedPoints}
            skillPointsMax={skillPointsMax}
            skillPointsMaxLevel={skillPointsMaxLevel}
            onUpdateCallBack={(value) => this.defenceCallBack(value)}
          />

          <SliderWithRules
            labelText="Speed"
            myValue={speedPoints}
            otherValueOne={strengthPoints}
            otherValueTwo={attackPoints}
            otherValueThree={defencePoints}
            skillPointsMax={skillPointsMax}
            skillPointsMaxLevel={skillPointsMaxLevel}
            onUpdateCallBack={(value) => this.speedCallBack(value)}
          />

          {formLoading && (
            <div className="grid-form-items form-item-center">
              <CircularProgress size={24} />
            </div>
          )}

          <Button
            variant="contained"
            color="primary"
            className="grid-form-items"
            type="submit"
            disabled={formLoading}
          >
            Create {creatureName}
          </Button>
        </form>
      </Fragment>
    );
  }
}
export default CreateForm;

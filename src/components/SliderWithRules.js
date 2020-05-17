import React, { Component } from 'react';
import { Slider } from '@material-ui/core';

class SliderWithRules extends Component {
  constructor(props) {
    super(props);

    const {
      labelText,
      myValue,
      otherValueOne,
      otherValueTwo,
      otherValueThree,
      skillPointsMax,
      skillPointsMaxLevel,
      onUpdateCallBack,
    } = props;

    this.state = {
      labelText: labelText,
      myValue: myValue,
      otherValueOne: otherValueOne,
      otherValueTwo: otherValueTwo,
      otherValueThree: otherValueThree,
      skillPointsMax: skillPointsMax,
      skillPointsMaxLevel: skillPointsMaxLevel,
      onUpdateCallBack: onUpdateCallBack,
    };
  }

  static getDerivedStateFromProps({
    otherValueOne,
    otherValueTwo,
    otherValueThree,
  }) {
    return { otherValueOne, otherValueTwo, otherValueThree };
  }

  valuetext(value) {
    return value;
  }

  change(event, value) {
    const {
      otherValueOne,
      otherValueTwo,
      otherValueThree,
      skillPointsMax,
      skillPointsMaxLevel,
      onUpdateCallBack,
    } = this.state;

    if (this.checkSkillPointLevel(skillPointsMaxLevel, value)) {
      if (
        this.checkSkillPointsMax(
          value,
          otherValueOne,
          otherValueTwo,
          otherValueThree,
          skillPointsMax
        )
      ) {
        this.setState({
          myValue: value,
          skillPointsLeft:
            skillPointsMax -
            (value + otherValueOne + otherValueTwo + otherValueThree),
        });
        onUpdateCallBack(value);
      }
    }
  }

  checkSkillPointLevel(skillPointsMaxLevel, value) {
    if (value <= skillPointsMaxLevel) {
      return true;
    }
    return false;
  }

  checkSkillPointsMax(
    myValue,
    otherValueOne,
    otherValueTwo,
    otherValueThree,
    skillPointsMax
  ) {
    if (
      myValue + otherValueOne + otherValueTwo + otherValueThree >
      skillPointsMax
    ) {
      return false;
    }
    return true;
  }

  render() {
    const { myValue, labelText } = this.state;

    return (
      <label className="grid-form-items" htmlFor="strength">
        {labelText}
        <Slider
          id={labelText}
          getAriaValueText={this.valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={10}
          value={myValue}
          onChange={(e, v) => this.change(e, v)}
        />
      </label>
    );
  }
}
export default SliderWithRules;

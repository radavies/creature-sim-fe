import React, { Component } from 'react';

import { GetCreatures } from '../utils/Network';

import CreatureList from '../components/CreatureList';
import WorldView from '../components/WorldView';

const fakeCreatureData = [
  { id: 1, name: 'Creature 1', avatarHash: 'd1895a522680c86a67e4718b09bcf8f1' },
  { id: 2, name: 'Creature 2', avatarHash: '8491519da777050732a37d9360778b10' },
  { id: 3, name: 'Creature 3', avatarHash: '4f9c67cec84a0ad445f32d76366e61bb' },
];

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creatures: [],
    };
    this.getCreaturesSuccess = this.getCreaturesError.bind(this);
    this.getCreaturesError = this.getCreaturesError.bind(this);
    this.getCreatures();
  }

  getCreatures() {
    GetCreatures(this.getCreaturesSuccess, this.getCreaturesError);
  }

  getCreaturesSuccess(response) {
    const creatures = response.data;
    this.setState({ creatures });
  }

  getCreaturesError() {
    this.setState({ creatures: fakeCreatureData });
  }

  render() {
    const { creatures } = this.state;
    return (
      <div className="world-container">
        <CreatureList creatures={creatures} />
        <WorldView />
      </div>
    );
  }
}
export default World;

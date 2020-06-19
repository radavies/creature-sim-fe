import React, { Component } from 'react';

import { GetCreatures, GetWorld } from '../utils/Network';

import CreatureList from '../components/CreatureList';
import WorldView from '../components/WorldView';

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creatures: [],
      world: [],
    };
    this.getCreaturesSuccess = this.getCreaturesSuccess.bind(this);
    this.getCreaturesError = this.getCreaturesError.bind(this);
    this.getWorldSuccess = this.getWorldSuccess.bind(this);
    this.getWorldError = this.getWorldError.bind(this);

    this.getCreatures();
    this.getWorld();
  }

  getCreatures() {
    GetCreatures(this.getCreaturesSuccess, this.getCreaturesError);
  }

  getWorld() {
    GetWorld(this.getWorldSuccess, this.getWorldError);
  }

  getCreaturesSuccess(response) {
    const creatures = response.data;
    this.setState({ creatures });
  }

  getCreaturesError() {
    this.setState({ creatures: [] });
  }

  getWorldSuccess(response) {
    const world = response.data;
    this.setState({ world });
  }

  getWorldError() {
    this.setState({ world: [] });
  }

  render() {
    const { creatures, world } = this.state;
    return (
      <div className="world-page-container">
        <CreatureList creatures={creatures} />
        <WorldView world={world} />
      </div>
    );
  }
}
export default World;

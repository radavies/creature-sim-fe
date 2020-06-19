import React, { Fragment } from 'react';

const WorldView = ({ world }) => {
  return (
    <div className="world-map-container">
      {world.length === 0 ? (
        <Fragment>
          <div>Failed to load world.</div>
          <div></div>
          <div>Please try again.</div>
        </Fragment>
      ) : (
        buildMap(world)
      )}
    </div>
  );
};

function buildMap(world) {
  return world.world.map((mapRow) =>
    mapRow.terrain.map((cell) => (
      <div
        id={cell.key}
        key={cell.key}
        className={`map-cell ${cell.type}`}
      ></div>
    ))
  );
}

export default WorldView;

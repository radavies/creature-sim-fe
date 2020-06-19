import React from 'react';

const CreatureList = ({ creatures }) => {
  return (
    <div className="creature-list">
      {creatures.length === 0 ? (
        <span>No Creatures</span>
      ) : (
        creatures.map((creature) => (
          <div key={creature.creatureId}>
            <img
              alt={creature.creatureName}
              src={`https://www.gravatar.com/avatar/${creature.avatarHash}?d=monsterid&s=50`}
            />
            <span>{creature.creatureName}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default CreatureList;

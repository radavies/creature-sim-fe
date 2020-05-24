import React from 'react';

const CreatureList = ({ creatures }) => {
  return (
    <div className="creature-list">
      {creatures.length === 0 ? (
        <span>No Creatures</span>
      ) : (
        creatures.map((creature) => (
          <div key={creature.id}>
            <img
              alt={creature.name}
              src={`https://www.gravatar.com/avatar/${creature.avatarHash}?d=monsterid&s=50`}
            />
            <span>{creature.name}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default CreatureList;

// src/ThreeJs/gameZone/GameZoneComponents.jsx
import React from 'react';
import Obstacle from '../components/Obstacle'; // Assuming you have an Obstacle component

const GameZoneComponents = () => {
  return (
    <>
      {/* Example: Add obstacles or other components */}
      <Obstacle position={[10, 0, -5]} />
      <Obstacle position={[-10, 0, 5]} />
      {/* Add more components as needed */}
    </>
  );
};

export default GameZoneComponents;
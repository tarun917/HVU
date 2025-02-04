// src/ThreeJs/components/Obstacle.jsx
import React from 'react';

const Obstacle = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default Obstacle;
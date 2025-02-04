// src/ThreeJs/components/Spaceship.jsx
import React from 'react';

const Spaceship = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 3]} />
      <meshStandardMaterial color="silver" />
    </mesh>
  );
};

export default Spaceship;
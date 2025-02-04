// src/ThreeJs/components/Wrestler.jsx
import React from 'react';

const Wrestler = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default Wrestler;
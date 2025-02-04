// src/ThreeJs/components/Puzzle.jsx
import React from 'react';

const Puzzle = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="purple" />
    </mesh>
  );
};

export default Puzzle;
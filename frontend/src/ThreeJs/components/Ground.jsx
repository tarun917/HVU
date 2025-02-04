// src/ThreeJs/components/Ground.jsx
import React from 'react';
import { useBox } from '@react-three/cannon';

const Ground = () => {
  // Create a box physics body using @react-three/cannon
  const [ref] = useBox(() => ({
    args: [2000, 0.3048, 2000], // Dimensions: 2000m x 0.3048m x 2000m
    position: [0, -0.1524, 0], // Position: slightly below y=0 to show height
  }));

  return (
    <mesh ref={ref} receiveShadow>
      {/* Create a box geometry with the specified dimensions */}
      <boxGeometry args={[2000, 2000]} />
      {/* Apply a green material to the ground */}
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

export default Ground;
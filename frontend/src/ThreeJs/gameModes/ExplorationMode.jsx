// src/ThreeJs/gameModes/ExplorationMode.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AvatarContainer from '../containers/AvatarContainer';

const ExplorationMode = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <AvatarContainer />
      <OrbitControls />
    </Canvas>
  );
};

export default ExplorationMode;
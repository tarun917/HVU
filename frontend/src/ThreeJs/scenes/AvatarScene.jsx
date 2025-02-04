// src/ThreeJs/scenes/AvatarScene.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AvatarContainer from '../containers/AvatarContainer';

const AvatarScene = () => {
  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} angle={0.3} penumbra={1} castShadow />
      <AvatarContainer />
      <OrbitControls />
    </Canvas>
  );
};

export default AvatarScene;
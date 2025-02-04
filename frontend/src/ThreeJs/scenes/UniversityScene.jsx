// src/ThreeJs/scenes/UniversityScene.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BuildingContainer from '../containers/BuildingContainer';
import VehicleContainer from '../containers/VehicleContainer';
import Tree from '../components/Tree';
import Bench from '../components/Bench';
import Fountain from '../components/Fountain';
import WaterFeatures from '../components/WaterFeatures';

const UniversityScene = () => {
  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} angle={0.3} penumbra={1} castShadow />
      <BuildingContainer />
      <VehicleContainer />
      <Tree position={[5, 0, -5]} />
      <Bench position={[10, 0, -10]} />
      <Fountain position={[-5, 0, 5]} />
      <WaterFeatures position={[0, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
};

export default UniversityScene;
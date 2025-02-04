// src/ThreeJs/scenes/MainScene.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AvatarContainer from '../containers/AvatarContainer';
import BuildingContainer from '../containers/BuildingContainer';
import VehicleContainer from '../containers/VehicleContainer';
import PhysicsScene from '../physics/Physics';
import WeatherEffects from '../weather/WeatherEffects';
import DayNightCycle from '../weather/DayNightCycle';
import MainCamera from '../camera/MainCamera';
import CameraControls from '../camera/CameraControls';
import Robot from '../bots/Robot';
import Dog from '../bots/Dog';
import Parrot from '../bots/Parrot';


const MainScene = () => {
  return (
    <Canvas shadows>
      <MainCamera />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} angle={0.3} penumbra={1} castShadow />
      <AvatarContainer />
      <BuildingContainer />
      <VehicleContainer />
      <PhysicsScene />
      <DayNightCycle />
      <WeatherEffects />
      <CameraControls />
      <Robot position={[0, 0, 0]} />
      <Dog position={[5, 0, 5]} />
      <Parrot position={[-5, 0, -5]} />
      <OrbitControls />
    </Canvas>
  );
};

export default MainScene;
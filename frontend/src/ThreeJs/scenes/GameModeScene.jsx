// src/ThreeJs/scenes/GameModeScene.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SurvivalMode from '../gameModes/SurvivalMode';
import CreativeMode from '../gameModes/CreativeMode';
import ExplorationMode from '../gameModes/ExplorationMode';
import SquidGame from '../gameModes/SquidGame';
import EscapeTheRoom from '../gameModes/EscapeTheRoom';
import WWEFight from '../gameModes/WWEFight';
import SpaceWar from '../gameModes/SpaceWar';

const GameModeScene = () => {
  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} angle={0.3} penumbra={1} castShadow />
      <SurvivalMode />
      <CreativeMode />
      <ExplorationMode />
      <SquidGame />
      <EscapeTheRoom />
      <WWEFight />
      <SpaceWar />
      <OrbitControls />
    </Canvas>
  );
};

export default GameModeScene;
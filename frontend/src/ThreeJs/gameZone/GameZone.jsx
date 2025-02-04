// src/ThreeJs/gameZone/GameZone.jsx
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AvatarContainer from '../containers/AvatarContainer';
import BuildingContainer from '../containers/BuildingContainer';
import VehicleContainer from '../containers/VehicleContainer';
import GameZoneComponents from './GameZoneComponents';

const GameZone = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Example: Load initial game zone elements
    const loadElements = () => {
      const initialElements = [
        { id: 1, type: 'building', position: [0, 0, 0] },
        { id: 2, type: 'vehicle', position: [5, 0, 5] },
        // Add more elements as needed
      ];
      setElements(initialElements);
    };

    loadElements();
  }, []);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <AvatarContainer />
      {/* Render game zone elements */}
      {elements.map((element) => {
        if (element.type === 'building') {
          return <BuildingContainer key={element.id} position={element.position} />;
        } else if (element.type === 'vehicle') {
          return <VehicleContainer key={element.id} position={element.position} />;
        }
        return null;
      })}
      <GameZoneComponents />
      <OrbitControls />
    </Canvas>
  );
};

export default GameZone;
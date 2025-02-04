// src/ThreeJs/gameModes/CreativeMode.jsx
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BuildingContainer from '../containers/BuildingContainer';

const CreativeMode = () => {
  const [buildings, setBuildings] = useState([]);

  const addBuilding = () => {
    setBuildings((prevBuildings) => [
      ...prevBuildings,
      { id: prevBuildings.length, position: [0, 0, 0] },
    ]);
  };

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <button onClick={addBuilding} style={{ position: 'absolute', top: '10px', left: '10px' }}>
        Add Building
      </button>
      {/* Render buildings */}
      {buildings.map((building) => (
        <BuildingContainer key={building.id} position={building.position} />
      ))}
      <OrbitControls />
    </Canvas>
  );
};

export default CreativeMode;
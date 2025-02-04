// src/ThreeJs/gameModes/WWEFight.jsx
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Wrestler from '../components/Wrestler'; // Assuming you have a Wrestler component

const WWEFight = () => {
  const [wrestlers, setWrestlers] = useState([]);

  const addWrestler = () => {
    setWrestlers((prevWrestlers) => [
      ...prevWrestlers,
      { id: prevWrestlers.length, position: [Math.random() * 10 - 5, 0, Math.random() * 10 - 5] },
    ]);
  };

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <button onClick={addWrestler} style={{ position: 'absolute', top: '10px', left: '10px' }}>
        Add Wrestler
      </button>
      {/* Render wrestlers */}
      {wrestlers.map((wrestler) => (
        <Wrestler key={wrestler.id} position={wrestler.position} />
      ))}
      <OrbitControls />
    </Canvas>
  );
};

export default WWEFight;
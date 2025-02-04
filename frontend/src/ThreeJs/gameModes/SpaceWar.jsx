// src/ThreeJs/gameModes/SpaceWar.jsx
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Spaceship from '../components/Spaceship'; // Assuming you have a Spaceship component

const SpaceWar = () => {
  const [spaceships, setSpaceships] = useState([]);

  const addSpaceship = () => {
    setSpaceships((prevSpaceships) => [
      ...prevSpaceships,
      { id: prevSpaceships.length, position: [Math.random() * 20 - 10, 0, Math.random() * 20 - 10] },
    ]);
  };

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <button onClick={addSpaceship} style={{ position: 'absolute', top: '10px', left: '10px' }}>
        Add Spaceship
      </button>
      {/* Render spaceships */}
      {spaceships.map((spaceship) => (
        <Spaceship key={spaceship.id} position={spaceship.position} />
      ))}
      <OrbitControls />
    </Canvas>
  );
};

export default SpaceWar;
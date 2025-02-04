// src/ThreeJs/gameModes/SurvivalMode.jsx
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AvatarContainer from '../containers/AvatarContainer';
import Obstacle from '../components/Obstacle'; // Assuming you have an Obstacle component

const SurvivalMode = () => {
  const [obstacles, setObstacles] = useState([]);

  useEffect(() => {
    // Generate random obstacles
    const generateObstacles = () => {
      let newObstacles = [];
      for (let i = 0; i < 10; i++) {
        newObstacles.push({
          id: i,
          position: [Math.random() * 20 - 10, 0, Math.random() * 20 - 10],
        });
      }
      setObstacles(newObstacles);
    };

    generateObstacles();
  }, []);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <AvatarContainer />
      {/* Render obstacles */}
      {obstacles.map((obstacle) => (
        <Obstacle key={obstacle.id} position={obstacle.position} />
      ))}
      <OrbitControls />
    </Canvas>
  );
};

export default SurvivalMode;
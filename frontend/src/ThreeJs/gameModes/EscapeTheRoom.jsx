// src/ThreeJs/gameModes/EscapeTheRoom.jsx
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Puzzle from '../components/Puzzle'; // Assuming you have a Puzzle component

const EscapeTheRoom = () => {
  const [puzzles, setPuzzles] = useState([]);

  useEffect(() => {
    // Example: Generate puzzles
    const generatePuzzles = () => {
      let newPuzzles = [];
      for (let i = 0; i < 5; i++) {
        newPuzzles.push({
          id: i,
          position: [Math.random() * 10 - 5, 0, Math.random() * 10 - 5],
        });
      }
      setPuzzles(newPuzzles);
    };

    generatePuzzles();
  }, []);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      {/* Render puzzles */}
      {puzzles.map((puzzle) => (
        <Puzzle key={puzzle.id} position={puzzle.position} />
      ))}
      <OrbitControls />
    </Canvas>
  );
};

export default EscapeTheRoom;
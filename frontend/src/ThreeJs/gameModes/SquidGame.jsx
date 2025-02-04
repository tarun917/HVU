// src/ThreeJs/gameModes/SquidGame.jsx
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MultiplayerAvatar from '../components/MultiplayerAvatar'; // Assuming you have a MultiplayerAvatar component

const SquidGame = () => {
  const [players, setPlayers] = useState([]);

  // Example function to add players
  const addPlayer = () => {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      { id: prevPlayers.length, position: [Math.random() * 20 - 10, 0, Math.random() * 20 - 10] },
    ]);
  };

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <button onClick={addPlayer} style={{ position: 'absolute', top: '10px', left: '10px' }}>
        Add Player
      </button>
      {/* Render players */}
      {players.map((player) => (
        <MultiplayerAvatar key={player.id} position={player.position} />
      ))}
      <OrbitControls />
    </Canvas>
  );
};

export default SquidGame;
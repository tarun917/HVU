// src/ThreeJs/components/MultiplayerAvatar.jsx
import React from 'react';

const MultiplayerAvatar = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default MultiplayerAvatar;
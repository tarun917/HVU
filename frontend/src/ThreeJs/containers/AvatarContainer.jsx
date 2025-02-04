// src/ThreeJs/containers/AvatarContainer.jsx
import React, { useState, useEffect } from 'react';
import Avatar from '../components/Avatar';

const AvatarContainer = () => {
  const [avatarPosition, setAvatarPosition] = useState([0, 0, 0]);
  const [avatarScale, setAvatarScale] = useState([1, 1, 1]);
  const [avatarRotation, setAvatarRotation] = useState([0, 0, 0]);

  useEffect(() => {
    // Example: Update avatar position or any other state
    const handleKeyPress = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          setAvatarPosition((prev) => [prev[0], prev[1] + 1, prev[2]]);
          break;
        case 'ArrowDown':
          setAvatarPosition((prev) => [prev[0], prev[1] - 1, prev[2]]);
          break;
        // Add more cases for other keys
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <Avatar
      position={avatarPosition}
      scale={avatarScale}
      rotation={avatarRotation}
    />
  );
};

export default AvatarContainer;
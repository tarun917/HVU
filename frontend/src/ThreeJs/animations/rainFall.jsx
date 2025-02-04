// src/ThreeJs/animations/rainFall.jsx
import { useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const RainFallAnimation = ({ rain }) => {
  useFrame((state, delta) => {
    rain.forEach(drop => {
      drop.position.y -= 0.1 * delta;
      if (drop.position.y < 0) drop.position.y = Math.random() * 10;
    });
  });

  return null;
};

export default RainFallAnimation;
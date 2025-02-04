// src/ThreeJs/animations/cloudsMovement.jsx
import { useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const CloudsMovementAnimation = ({ clouds }) => {
  useFrame((state, delta) => {
    clouds.forEach(cloud => {
      cloud.position.x += 0.01 * delta;
    });
  });

  return null;
};

export default CloudsMovementAnimation;
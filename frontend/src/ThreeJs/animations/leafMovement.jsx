// src/ThreeJs/animations/leafMovement.jsx
import { useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const LeafMovementAnimation = ({ leaves }) => {
  useFrame((state, delta) => {
    leaves.forEach(leaf => {
      leaf.rotation.z += 0.01 * delta;
    });
  });

  return null;
};

export default LeafMovementAnimation;
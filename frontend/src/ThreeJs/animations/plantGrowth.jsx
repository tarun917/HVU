// src/ThreeJs/animations/plantGrowth.jsx
import { useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const PlantGrowthAnimation = ({ plant }) => {
  useFrame((state, delta) => {
    if (plant.scale.y < 1) {
      plant.scale.y += 0.01 * delta;
    }
  });

  return null;
};

export default PlantGrowthAnimation;
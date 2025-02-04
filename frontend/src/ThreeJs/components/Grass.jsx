// src/ThreeJs/components/Grass.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Grass = ({ position = [0, 0, 0], scale = [1, 1, 1], grassCount = 1000 }) => {
  const grassRef = useRef();

  useEffect(() => {
    const grassGroup = new THREE.Group();

    // Create grass blade geometry and material
    const bladeGeometry = new THREE.PlaneGeometry(0.1, 0.5);
    const bladeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });

    for (let i = 0; i < grassCount; i++) {
      // Create a grass blade
      const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);

      // Randomize the position of each grass blade within a range
      blade.position.set(
        Math.random() * 10 - 5,
        0,
        Math.random() * 10 - 5
      );

      // Randomize the rotation of each grass blade
      blade.rotation.y = Math.random() * Math.PI;

      grassGroup.add(blade);
    }

    // Position and scale the group
    grassGroup.position.set(...position);
    grassGroup.scale.set(...scale);

    // Add the grass to the ref
    grassRef.current.add(grassGroup);

    // Add lighting to the grass
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    grassRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (grassRef.current) {
        grassRef.current.remove(grassGroup);
        grassRef.current.remove(light);
      }
    };
  }, [position, scale, grassCount]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the grass
  });

  return (
    <group ref={grassRef} />
  );
};

export default Grass;
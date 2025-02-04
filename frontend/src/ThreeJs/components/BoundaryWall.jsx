// src/ThreeJs/components/BoundaryWall.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const BoundaryWall = ({ position = [0, 0, 0], scale = [1, 1, 1], length = 10, height = 2 }) => {
  const wallRef = useRef();

  useEffect(() => {
    // Create the wall geometry and material
    const wallGeometry = new THREE.BoxGeometry(length, height, 0.5);
    const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });

    // Create the wall mesh
    const wall = new THREE.Mesh(wallGeometry, wallMaterial);

    // Position and scale the wall
    wall.position.set(...position);
    wall.scale.set(...scale);

    // Add the wall to the ref
    wallRef.current.add(wall);

    // Add lighting to the wall
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    wallRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (wallRef.current) {
        wallRef.current.remove(wall);
        wallRef.current.remove(light);
      }
    };
  }, [position, scale, length, height]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the wall
  });

  return (
    <group ref={wallRef} />
  );
};

export default BoundaryWall;
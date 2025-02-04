// src/ThreeJs/components/Plant.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Plant = ({ position = [0, 0, 0], scale = [1, 1, 1], leafCount = 10 }) => {
  const plantRef = useRef();

  useEffect(() => {
    // Create plant stem geometry and material
    const stemGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 32);
    const stemMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
    const stem = new THREE.Mesh(stemGeometry, stemMaterial);
    stem.position.y = 1; // Position stem so that its base is at y = 0

    // Create a group to hold the plant components
    const plantGroup = new THREE.Group();
    plantGroup.add(stem);

    // Create leaf geometry and material
    const leafGeometry = new THREE.PlaneGeometry(0.5, 1);
    const leafMaterial = new THREE.MeshStandardMaterial({ color: 0x00FF00, side: THREE.DoubleSide });

    for (let i = 0; i < leafCount; i++) {
      // Create a leaf
      const leaf = new THREE.Mesh(leafGeometry, leafMaterial);

      // Randomize the position and rotation of each leaf
      leaf.position.y = Math.random() * 2 + 0.5; // Random height along the stem
      leaf.rotation.set(
        Math.random() * Math.PI * 2, // Random rotation around the x-axis
        Math.random() * Math.PI * 2, // Random rotation around the y-axis
        Math.random() * Math.PI * 2  // Random rotation around the z-axis
      );

      plantGroup.add(leaf);
    }

    // Position and scale the group
    plantGroup.position.set(...position);
    plantGroup.scale.set(...scale);

    // Add the plant group to the ref
    plantRef.current.add(plantGroup);

    // Add lighting to the plant
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    plantRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (plantRef.current) {
        plantRef.current.remove(plantGroup);
        plantRef.current.remove(light);
      }
    };
  }, [position, scale, leafCount]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the plant
  });

  return (
    <group ref={plantRef} />
  );
};

export default Plant;
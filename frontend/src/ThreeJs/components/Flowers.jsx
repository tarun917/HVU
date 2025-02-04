// src/ThreeJs/components/Flowers.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Flowers = ({ position = [0, 0, 0], scale = [1, 1, 1], flowerCount = 10 }) => {
  const flowersRef = useRef();

  useEffect(() => {
    // Create flower geometry and materials
    const stemGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 32);
    const stemMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 });
    const petalGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const petalMaterial = new THREE.MeshStandardMaterial({ color: 0xFF69B4 });
    const centerGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const centerMaterial = new THREE.MeshStandardMaterial({ color: 0xFFD700 });

    // Create a group to hold all flowers
    const flowersGroup = new THREE.Group();

    for (let i = 0; i < flowerCount; i++) {
      // Create flower stem
      const stem = new THREE.Mesh(stemGeometry, stemMaterial);
      stem.position.y = 0.5;

      // Create flower petals
      const petals = [];
      for (let j = 0; j < 5; j++) {
        const petal = new THREE.Mesh(petalGeometry, petalMaterial);
        petal.position.set(
          Math.cos((j * 2 * Math.PI) / 5) * 0.3,
          1,
          Math.sin((j * 2 * Math.PI) / 5) * 0.3
        );
        petals.push(petal);
      }

      // Create flower center
      const center = new THREE.Mesh(centerGeometry, centerMaterial);
      center.position.y = 1;

      // Group stem, petals, and center
      const flower = new THREE.Group();
      flower.add(stem);
      petals.forEach((petal) => flower.add(petal));
      flower.add(center);

      // Randomize the position of each flower within a range
      flower.position.set(
        position[0] + Math.random() * 10 - 5,
        position[1],
        position[2] + Math.random() * 10 - 5
      );

      flowersGroup.add(flower);
    }

    // Position and scale the group
    flowersGroup.position.set(...position);
    flowersGroup.scale.set(...scale);

    // Add the flowers to the ref
    flowersRef.current.add(flowersGroup);

    // Add lighting to the flowers
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    flowersRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (flowersRef.current) {
        flowersRef.current.remove(flowersGroup);
        flowersRef.current.remove(light);
      }
    };
  }, [position, scale, flowerCount]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the flowers
  });

  return (
    <group ref={flowersRef} />
  );
};

export default Flowers;
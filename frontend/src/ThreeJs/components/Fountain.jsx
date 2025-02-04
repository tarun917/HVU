// src/ThreeJs/components/Fountain.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Fountain = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const fountainRef = useRef();

  useEffect(() => {
    // Create the fountain base
    const baseGeometry = new THREE.CylinderGeometry(5, 5, 1, 32);
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = 0.5;

    // Create the fountain middle section
    const middleGeometry = new THREE.CylinderGeometry(3, 3, 2, 32);
    const middleMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const middle = new THREE.Mesh(middleGeometry, middleMaterial);
    middle.position.y = 2;

    // Create the fountain top
    const topGeometry = new THREE.CylinderGeometry(1, 1, 1, 32);
    const topMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const top = new THREE.Mesh(topGeometry, topMaterial);
    top.position.y = 4;

    // Group all parts together
    const fountain = new THREE.Group();
    fountain.add(base);
    fountain.add(middle);
    fountain.add(top);

    // Position and scale the group
    fountain.position.set(...position);
    fountain.scale.set(...scale);

    // Add the fountain to the ref
    fountainRef.current.add(fountain);

    // Add lighting to the fountain
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    fountainRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (fountainRef.current) {
        fountainRef.current.remove(fountain);
        fountainRef.current.remove(light);
      }
    };
  }, [position, scale]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the fountain
  });

  return (
    <group ref={fountainRef} />
  );
};

export default Fountain;
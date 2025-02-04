// src/ThreeJs/components/ClassroomDesks.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const ClassroomDesks = ({ position = [0, 0, 0], scale = [1, 1, 1], rows = 3, columns = 3 }) => {
  const desksRef = useRef();

  useEffect(() => {
    // Create desk geometry and material
    const deskTopGeometry = new THREE.BoxGeometry(1, 0.1, 0.6);
    const deskLegGeometry = new THREE.BoxGeometry(0.1, 0.7, 0.1);
    const deskMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });

    // Create a group to hold all desks
    const desksGroup = new THREE.Group();

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        // Create desk top
        const deskTop = new THREE.Mesh(deskTopGeometry, deskMaterial);
        deskTop.position.set(col * 1.5, 0.5, row * 1.5);

        // Create desk legs
        const leg1 = new THREE.Mesh(deskLegGeometry, deskMaterial);
        const leg2 = new THREE.Mesh(deskLegGeometry, deskMaterial);
        const leg3 = new THREE.Mesh(deskLegGeometry, deskMaterial);
        const leg4 = new THREE.Mesh(deskLegGeometry, deskMaterial);

        leg1.position.set(-0.45, 0.25, -0.25);
        leg2.position.set(-0.45, 0.25, 0.25);
        leg3.position.set(0.45, 0.25, -0.25);
        leg4.position.set(0.45, 0.25, 0.25);

        // Group desk top and legs
        const desk = new THREE.Group();
        desk.add(deskTop);
        desk.add(leg1);
        desk.add(leg2);
        desk.add(leg3);
        desk.add(leg4);

        desksGroup.add(desk);
      }
    }

    // Position and scale the group
    desksGroup.position.set(...position);
    desksGroup.scale.set(...scale);

    // Add the desks to the ref
    desksRef.current.add(desksGroup);

    // Add lighting to the desks
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    desksRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (desksRef.current) {
        desksRef.current.remove(desksGroup);
        desksRef.current.remove(light);
      }
    };
  }, [position, scale, rows, columns]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the desks
  });

  return (
    <group ref={desksRef} />
  );
};

export default ClassroomDesks;
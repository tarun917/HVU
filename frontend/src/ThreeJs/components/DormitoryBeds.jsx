// src/ThreeJs/components/DormitoryBeds.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const DormitoryBeds = ({ position = [0, 0, 0], scale = [1, 1, 1], rows = 2, columns = 2 }) => {
  const bedsRef = useRef();

  useEffect(() => {
    // Create bed geometry and material
    const bedBaseGeometry = new THREE.BoxGeometry(2, 0.2, 1);
    const bedLegGeometry = new THREE.BoxGeometry(0.1, 1, 0.1);
    const bedMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const mattressGeometry = new THREE.BoxGeometry(2, 0.2, 1);
    const mattressMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

    // Create a group to hold all beds
    const bedsGroup = new THREE.Group();

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        // Create bed base
        const bedBase = new THREE.Mesh(bedBaseGeometry, bedMaterial);
        bedBase.position.set(col * 2.5 - (columns - 1) * 1.25, 0.6, row * 2.5 - (rows - 1) * 1.25);

        // Create bed legs
        const leg1 = new THREE.Mesh(bedLegGeometry, bedMaterial);
        const leg2 = new THREE.Mesh(bedLegGeometry, bedMaterial);
        const leg3 = new THREE.Mesh(bedLegGeometry, bedMaterial);
        const leg4 = new THREE.Mesh(bedLegGeometry, bedMaterial);

        leg1.position.set(-0.95, 0.3, -0.45);
        leg2.position.set(-0.95, 0.3, 0.45);
        leg3.position.set(0.95, 0.3, -0.45);
        leg4.position.set(0.95, 0.3, 0.45);

        // Create mattress
        const mattress = new THREE.Mesh(mattressGeometry, mattressMaterial);
        mattress.position.set(0, 0.4, 0);

        // Group bed base, legs, and mattress
        const bed = new THREE.Group();
        bed.add(bedBase);
        bed.add(leg1);
        bed.add(leg2);
        bed.add(leg3);
        bed.add(leg4);
        bed.add(mattress);

        bedsGroup.add(bed);
      }
    }

    // Position and scale the group
    bedsGroup.position.set(...position);
    bedsGroup.scale.set(...scale);

    // Add the beds to the ref
    bedsRef.current.add(bedsGroup);

    // Add lighting to the beds
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    bedsRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (bedsRef.current) {
        bedsRef.current.remove(bedsGroup);
        bedsRef.current.remove(light);
      }
    };
  }, [position, scale, rows, columns]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the beds
  });

  return (
    <group ref={bedsRef} />
  );
};

export default DormitoryBeds;
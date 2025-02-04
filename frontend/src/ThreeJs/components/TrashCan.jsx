// src/ThreeJs/components/TrashCan.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const TrashCan = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const trashCanRef = useRef();

  useEffect(() => {
    // Create the trash can body
    const bodyGeometry = new THREE.CylinderGeometry(1, 1, 2, 32);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 1; // Position the body so that its base is at y = 0

    // Create the trash can lid
    const lidGeometry = new THREE.CylinderGeometry(1.1, 1.1, 0.2, 32);
    const lidMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
    const lid = new THREE.Mesh(lidGeometry, lidMaterial);
    lid.position.y = 2.1; // Position the lid on top of the body

    // Create the trash can handles
    const handleGeometry = new THREE.TorusGeometry(0.2, 0.05, 16, 100);
    const handleMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
    const leftHandle = new THREE.Mesh(handleGeometry, handleMaterial);
    leftHandle.position.set(-1, 1.5, 0); // Position the left handle on the side of the body
    leftHandle.rotation.set(Math.PI / 2, 0, 0);

    const rightHandle = new THREE.Mesh(handleGeometry, handleMaterial);
    rightHandle.position.set(1, 1.5, 0); // Position the right handle on the side of the body
    rightHandle.rotation.set(Math.PI / 2, 0, 0);

    // Group all parts together
    const trashCan = new THREE.Group();
    trashCan.add(body);
    trashCan.add(lid);
    trashCan.add(leftHandle);
    trashCan.add(rightHandle);

    // Position and scale the group
    trashCan.position.set(...position);
    trashCan.scale.set(...scale);

    // Add the trash can to the ref
    trashCanRef.current.add(trashCan);

    // Add lighting to the trash can
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    trashCanRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (trashCanRef.current) {
        trashCanRef.current.remove(trashCan);
        trashCanRef.current.remove(light);
      }
    };
  }, [position, scale]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the trash can
  });

  return (
    <group ref={trashCanRef} />
  );
};

export default TrashCan;
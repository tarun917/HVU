// src/ThreeJs/components/Parrot.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Parrot = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const parrotRef = useRef();

  useEffect(() => {
    // Create the parrot body
    const bodyGeometry = new THREE.BoxGeometry(1, 1, 2);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(0, 1, 0);

    // Create the parrot head
    const headGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const headMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.set(0, 1.8, 0.8);

    // Create the parrot beak
    const beakGeometry = new THREE.ConeGeometry(0.2, 0.4, 32);
    const beakMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    const beak = new THREE.Mesh(beakGeometry, beakMaterial);
    beak.position.set(0, 1.8, 1.1);
    beak.rotation.x = Math.PI / 2;

    // Create the parrot wings
    const wingGeometry = new THREE.BoxGeometry(1, 0.1, 2);
    const wingMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
    const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
    leftWing.position.set(-0.8, 1, 0);

    const rightWing = new THREE.Mesh(wingGeometry, wingMaterial);
    rightWing.position.set(0.8, 1, 0);

    // Group all parts together
    const parrot = new THREE.Group();
    parrot.add(body);
    parrot.add(head);
    parrot.add(beak);
    parrot.add(leftWing);
    parrot.add(rightWing);

    // Position and scale the group
    parrot.position.set(...position);
    parrot.scale.set(...scale);

    // Add the parrot to the ref
    parrotRef.current.add(parrot);

    // Add lighting to the parrot
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    parrotRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (parrotRef.current) {
        parrotRef.current.remove(parrot);
        parrotRef.current.remove(light);
      }
    };
  }, [position, scale]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the parrot
  });

  return (
    <group ref={parrotRef} />
  );
};

export default Parrot;
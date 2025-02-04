// src/ThreeJs/components/Chair.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Chair = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const chairRef = useRef();

  useEffect(() => {
    // Create the chair seat
    const seatGeometry = new THREE.BoxGeometry(1, 0.1, 1);
    const seatMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const seat = new THREE.Mesh(seatGeometry, seatMaterial);
    seat.position.y = 0.5;

    // Create the chair legs
    const legGeometry = new THREE.BoxGeometry(0.1, 0.5, 0.1);
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const leg1 = new THREE.Mesh(legGeometry, legMaterial);
    const leg2 = new THREE.Mesh(legGeometry, legMaterial);
    const leg3 = new THREE.Mesh(legGeometry, legMaterial);
    const leg4 = new THREE.Mesh(legGeometry, legMaterial);

    leg1.position.set(-0.45, 0.25, -0.45);
    leg2.position.set(-0.45, 0.25, 0.45);
    leg3.position.set(0.45, 0.25, -0.45);
    leg4.position.set(0.45, 0.25, 0.45);

    // Create the chair backrest
    const backrestGeometry = new THREE.BoxGeometry(1, 1, 0.1);
    const backrestMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const backrest = new THREE.Mesh(backrestGeometry, backrestMaterial);
    backrest.position.set(0, 1, -0.45);

    // Group all parts together
    const chair = new THREE.Group();
    chair.add(seat);
    chair.add(leg1);
    chair.add(leg2);
    chair.add(leg3);
    chair.add(leg4);
    chair.add(backrest);

    // Position and scale the group
    chair.position.set(...position);
    chair.scale.set(...scale);

    // Add the chair to the ref
    chairRef.current.add(chair);

    // Add lighting to the chair
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    chairRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (chairRef.current) {
        chairRef.current.remove(chair);
        chairRef.current.remove(light);
      }
    };
  }, [position, scale]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the chair
  });

  return (
    <group ref={chairRef} />
  );
};

export default Chair;
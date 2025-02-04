// src/ThreeJs/components/Bench.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Bench = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const benchRef = useRef();

  useEffect(() => {
    // Create the bench seat
    const seatGeometry = new THREE.BoxGeometry(2, 0.2, 0.5);
    const seatMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const seat = new THREE.Mesh(seatGeometry, seatMaterial);
    seat.position.y = 0.6;

    // Create the bench legs
    const legGeometry = new THREE.BoxGeometry(0.1, 0.6, 0.1);
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const leg1 = new THREE.Mesh(legGeometry, legMaterial);
    const leg2 = new THREE.Mesh(legGeometry, legMaterial);
    const leg3 = new THREE.Mesh(legGeometry, legMaterial);
    const leg4 = new THREE.Mesh(legGeometry, legMaterial);

    leg1.position.set(-0.85, 0.3, -0.2);
    leg2.position.set(0.85, 0.3, -0.2);
    leg3.position.set(-0.85, 0.3, 0.2);
    leg4.position.set(0.85, 0.3, 0.2);

    // Create the bench backrest
    const backrestGeometry = new THREE.BoxGeometry(2, 0.2, 0.5);
    const backrestMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const backrest = new THREE.Mesh(backrestGeometry, backrestMaterial);
    backrest.position.set(0, 1, -0.25);
    backrest.rotation.x = Math.PI / 10;

    // Group all parts together
    const bench = new THREE.Group();
    bench.add(seat);
    bench.add(leg1);
    bench.add(leg2);
    bench.add(leg3);
    bench.add(leg4);
    bench.add(backrest);

    // Position and scale the group
    bench.position.set(...position);
    bench.scale.set(...scale);

    // Add the bench to the ref
    benchRef.current.add(bench);

    // Add lighting to the bench
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    benchRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (benchRef.current) {
        benchRef.current.remove(bench);
        benchRef.current.remove(light);
      }
    };
  }, [position, scale]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the bench
  });

  return (
    <group ref={benchRef} />
  );
};

export default Bench;
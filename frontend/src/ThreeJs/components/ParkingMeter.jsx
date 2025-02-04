// src/ThreeJs/components/ParkingMeter.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const ParkingMeter = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const meterRef = useRef();

  useEffect(() => {
    // Create the meter base
    const baseGeometry = new THREE.CylinderGeometry(0.3, 0.3, 1, 32);
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = 0.5;

    // Create the meter body
    const bodyGeometry = new THREE.CylinderGeometry(0.2, 0.2, 2, 32);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 2;

    // Create the meter head
    const headGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.5, 32);
    const headMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 3.25;

    // Group all parts together
    const meter = new THREE.Group();
    meter.add(base);
    meter.add(body);
    meter.add(head);

    // Position and scale the group
    meter.position.set(...position);
    meter.scale.set(...scale);

    // Add the meter to the ref
    meterRef.current.add(meter);

    // Add lighting to the meter
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    meterRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (meterRef.current) {
        meterRef.current.remove(meter);
        meterRef.current.remove(light);
      }
    };
  }, [position, scale]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the meter
  });

  return (
    <group ref={meterRef} />
  );
};

export default ParkingMeter;
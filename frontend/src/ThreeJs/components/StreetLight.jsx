// src/ThreeJs/components/StreetLight.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const StreetLight = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const lightRef = useRef();

  useEffect(() => {
    // Create the pole of the street light
    const poleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 5, 32);
    const poleMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 });
    const pole = new THREE.Mesh(poleGeometry, poleMaterial);
    pole.position.y = 2.5; // Position the pole so that its base is at y = 0

    // Create the arm of the street light
    const armGeometry = new THREE.BoxGeometry(0.1, 0.1, 2);
    const armMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 });
    const arm = new THREE.Mesh(armGeometry, armMaterial);
    arm.position.set(0, 4.5, 1); // Position the arm at the top of the pole

    // Create the light bulb of the street light
    const bulbGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const bulbMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00, emissive: 0xffff00, emissiveIntensity: 1 });
    const bulb = new THREE.Mesh(bulbGeometry, bulbMaterial);
    bulb.position.set(0, 4.5, 2); // Position the bulb at the end of the arm

    // Create a point light to simulate the street light
    const pointLight = new THREE.PointLight(0xffff00, 1, 10);
    pointLight.position.set(0, 4.5, 2);

    // Group all parts together
    const streetLight = new THREE.Group();
    streetLight.add(pole);
    streetLight.add(arm);
    streetLight.add(bulb);
    streetLight.add(pointLight);

    // Position and scale the group
    streetLight.position.set(...position);
    streetLight.scale.set(...scale);

    // Add the street light to the ref
    lightRef.current.add(streetLight);

    return () => {
      // Cleanup on unmount
      if (lightRef.current) {
        lightRef.current.remove(streetLight);
      }
    };
  }, [position, scale]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the street light
  });

  return (
    <group ref={lightRef} />
  );
};

export default StreetLight;
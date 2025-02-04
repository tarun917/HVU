// src/ThreeJs/components/Vehicle.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Vehicle = ({ position, scale, modelPath }) => {
  const vehicleRef = useRef();

  useEffect(() => {
    // Load the vehicle model
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      const vehicle = gltf.scene;
      vehicle.position.set(...position);
      vehicle.scale.set(...scale); // Adjust the scale if necessary
      vehicleRef.current.add(vehicle);
    });

    // Add lighting to the vehicle
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    vehicleRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (vehicleRef.current) {
        vehicleRef.current.remove(light);
      }
    };
  }, [modelPath, position, scale]);

  useFrame((state, delta) => {
    // Optionally, add any animations or interactions with the vehicle
  });

  return (
    <group ref={vehicleRef} />
  );
};

export default Vehicle;
// src/ThreeJs/components/Bike.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Bike = ({ position = [0, 0, 0], scale = [1, 1, 1], modelPath }) => {
  const bikeRef = useRef();

  useEffect(() => {
    // Load the bike model
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      const bike = gltf.scene;
      bike.position.set(...position);
      bike.scale.set(...scale); // Adjust the scale if necessary
      bikeRef.current.add(bike);
    });

    // Add lighting to the bike
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    bikeRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (bikeRef.current) {
        bikeRef.current.remove(light);
      }
    };
  }, [modelPath, position, scale]);

  useFrame((state, delta) => {
    // Optionally, add any animations or interactions with the bike
  });

  return (
    <group ref={bikeRef} />
  );
};

export default Bike;
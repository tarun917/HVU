// src/ThreeJs/components/Car.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Car = ({ position = [0, 0, 0], scale = [1, 1, 1], modelPath }) => {
  const carRef = useRef();

  useEffect(() => {
    // Load the car model
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      const car = gltf.scene;
      car.position.set(...position);
      car.scale.set(...scale); // Adjust the scale if necessary
      carRef.current.add(car);
    });

    // Add lighting to the car
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    carRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (carRef.current) {
        carRef.current.remove(light);
      }
    };
  }, [modelPath, position, scale]);

  useFrame((state, delta) => {
    // Optionally, add any animations or interactions with the car
  });

  return (
    <group ref={carRef} />
  );
};

export default Car;
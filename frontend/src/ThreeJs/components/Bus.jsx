// src/ThreeJs/components/Bus.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Bus = ({ position = [0, 0, 0], scale = [1, 1, 1], modelPath }) => {
  const busRef = useRef();

  useEffect(() => {
    // Load the bus model
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      const bus = gltf.scene;
      bus.position.set(...position);
      bus.scale.set(...scale); // Adjust the scale if necessary
      busRef.current.add(bus);
    });

    // Add lighting to the bus
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    busRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (busRef.current) {
        busRef.current.remove(light);
      }
    };
  }, [modelPath, position, scale]);

  useFrame((state, delta) => {
    // Optionally, add any animations or interactions with the bus
  });

  return (
    <group ref={busRef} />
  );
};

export default Bus;
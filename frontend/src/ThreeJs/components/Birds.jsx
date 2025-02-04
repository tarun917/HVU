// src/ThreeJs/components/Birds.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Birds = ({ position = [0, 0, 0], scale = [1, 1, 1], modelPath }) => {
  const birdsRef = useRef();

  useEffect(() => {
    // Load the birds model
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      const birds = gltf.scene;
      birds.position.set(...position);
      birds.scale.set(...scale); // Adjust the scale if necessary
      birdsRef.current.add(birds);
    });

    // Add lighting to the birds
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    birdsRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (birdsRef.current) {
        birdsRef.current.remove(light);
      }
    };
  }, [modelPath, position, scale]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the birds
    if (birdsRef.current) {
      birdsRef.current.rotation.y += 0.01; // Example: rotate birds slowly around the Y-axis
    }
  });

  return (
    <group ref={birdsRef} />
  );
};

export default Birds;
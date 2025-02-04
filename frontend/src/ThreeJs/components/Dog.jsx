// src/ThreeJs/components/Dog.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Dog = ({ position = [0, 0, 0], scale = [1, 1, 1], modelPath }) => {
  const dogRef = useRef();

  useEffect(() => {
    // Load the dog model
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      const dog = gltf.scene;
      dog.position.set(...position);
      dog.scale.set(...scale); // Adjust the scale if necessary
      dogRef.current.add(dog);
    });

    // Add lighting to the dog
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    dogRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (dogRef.current) {
        dogRef.current.remove(light);
      }
    };
  }, [modelPath, position, scale]);

  useFrame((state, delta) => {
    // Optionally, add any animations or interactions with the dog
  });

  return (
    <group ref={dogRef} />
  );
};

export default Dog;
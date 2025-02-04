// src/ThreeJs/components/Building.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Building = ({ position, scale, modelPath }) => {
  const buildingRef = useRef();

  useEffect(() => {
    // Load the building model
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      const building = gltf.scene;
      building.position.set(...position);
      building.scale.set(...scale); // Adjust the scale if necessary
      buildingRef.current.add(building);
    });

    // Add lighting to the building
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    buildingRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (buildingRef.current) {
        buildingRef.current.remove(light);
      }
    };
  }, [modelPath, position, scale]);

  useFrame((state, delta) => {
    // Optionally, add any animations or interactions with the building
  });

  return (
    <group ref={buildingRef} />
  );
};

export default Building;
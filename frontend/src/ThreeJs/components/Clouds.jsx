// src/ThreeJs/components/Clouds.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Clouds = ({ position = [0, 10, 0], scale = [1, 1, 1], cloudCount = 5 }) => {
  const cloudsRef = useRef();

  useEffect(() => {
    // Create the cloud geometry and material
    const cloudGeometry = new THREE.SphereGeometry(1, 16, 16);
    const cloudMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

    // Create a group to hold all clouds
    const cloudsGroup = new THREE.Group();

    for (let i = 0; i < cloudCount; i++) {
      // Create a cloud
      const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);

      // Randomize the position of each cloud within a range
      cloud.position.set(
        position[0] + Math.random() * 20 - 10,
        position[1] + Math.random() * 5 - 2.5,
        position[2] + Math.random() * 20 - 10
      );

      // Randomize the scale of each cloud
      const scaleValue = Math.random() * 0.5 + 0.5;
      cloud.scale.set(scaleValue, scaleValue, scaleValue);

      cloudsGroup.add(cloud);
    }

    // Position and scale the group
    cloudsGroup.position.set(...position);
    cloudsGroup.scale.set(...scale);

    // Add the clouds to the ref
    cloudsRef.current.add(cloudsGroup);

    // Add lighting to the clouds
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    cloudsRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (cloudsRef.current) {
        cloudsRef.current.remove(cloudsGroup);
        cloudsRef.current.remove(light);
      }
    };
  }, [position, scale, cloudCount]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the clouds
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.001; // Slow rotation for clouds
    }
  });

  return (
    <group ref={cloudsRef} />
  );
};

export default Clouds;
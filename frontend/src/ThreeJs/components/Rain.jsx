// src/ThreeJs/components/Rain.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Rain = ({ position = [0, 0, 0], count = 1000 }) => {
  const rainRef = useRef();

  useEffect(() => {
    // Create the rain geometry and material
    const rainGeometry = new THREE.BufferGeometry();
    const rainMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.1,
      transparent: true,
    });

    // Create the positions array for the raindrops
    const positions = [];
    for (let i = 0; i < count; i++) {
      positions.push(
        Math.random() * 20 - 10, // x
        Math.random() * 20,      // y
        Math.random() * 20 - 10  // z
      );
    }

    // Set the position attribute for the rain geometry
    rainGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    );

    // Create the rain points and add to the ref
    const rain = new THREE.Points(rainGeometry, rainMaterial);
    rain.position.set(...position);
    rainRef.current.add(rain);

    return () => {
      // Cleanup on unmount
      if (rainRef.current) {
        rainRef.current.remove(rain);
      }
    };
  }, [position, count]);

  useFrame(() => {
    // Animate the rain
    if (rainRef.current) {
      const positions = rainRef.current.children[0].geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= 0.2; // Move y position downwards
        if (positions[i + 1] < 0) {
          positions[i + 1] = 20; // Reset if below the ground
        }
      }
      rainRef.current.children[0].geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={rainRef} />
  );
};

export default Rain;
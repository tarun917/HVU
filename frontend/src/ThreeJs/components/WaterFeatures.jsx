// src/ThreeJs/components/WaterFeatures.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import { Water } from 'three/examples/jsm/objects/Water';
import { TextureLoader } from 'three';

const WaterFeatures = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const waterRef = useRef();

  const textureLoader = useLoader(TextureLoader, 'https://threejs.org/examples/textures/waternormals.jpg');

  useEffect(() => {
    // Ensure texture repeats
    textureLoader.wrapS = textureLoader.wrapT = THREE.RepeatWrapping;

    // Create the water geometry
    const waterGeometry = new THREE.PlaneGeometry(10, 10);

    // Create the water
    const water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: textureLoader,
      alpha: 1.0,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
    });

    // Rotate and position the water
    water.rotation.x = -Math.PI / 2;
    water.position.set(...position);
    water.scale.set(...scale);

    // Add the water to the ref
    waterRef.current.add(water);

    return () => {
      // Cleanup on unmount
      if (waterRef.current) {
        waterRef.current.remove(water);
      }
    };
  }, [position, scale, textureLoader]);

  useFrame((state, delta) => {
    // Animate the water
    if (waterRef.current) {
      waterRef.current.children[0].material.uniforms['time'].value += delta;
    }
  });

  return (
    <group ref={waterRef} />
  );
};

export default WaterFeatures;
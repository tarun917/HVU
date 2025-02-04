// src/ThreeJs/components/Avatar.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Avatar = () => {
  const avatarRef = useRef();

  useEffect(() => {
    // Load the avatar model
    const loader = new GLTFLoader();
    loader.load('/path/to/your/avatar/model.glb', (gltf) => {
      const avatar = gltf.scene;
      avatar.scale.set(1, 1, 1); // Adjust the scale if necessary
      avatarRef.current.add(avatar);
    });

    // Add lighting to the avatar
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    avatarRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (avatarRef.current) {
        avatarRef.current.remove(light);
      }
    };
  }, []);

  useFrame((state, delta) => {
    // Rotate the avatar for a simple animation
    if (avatarRef.current) {
      avatarRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={avatarRef} />
  );
};

export default Avatar;
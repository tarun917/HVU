// src/ThreeJs/components/Tree.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Tree = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const treeRef = useRef();

  useEffect(() => {
    // Create the tree trunk
    const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.2, 2, 32);
    const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = 1;

    // Create the tree foliage
    const foliageGeometry = new THREE.SphereGeometry(1, 32, 32);
    const foliageMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 });
    const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
    foliage.position.y = 3;

    // Group trunk and foliage together
    const tree = new THREE.Group();
    tree.add(trunk);
    tree.add(foliage);
    tree.position.set(...position);
    tree.scale.set(...scale);

    // Add the tree to the ref
    treeRef.current.add(tree);

    // Add lighting to the tree
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    treeRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (treeRef.current) {
        treeRef.current.remove(tree);
        treeRef.current.remove(light);
      }
    };
  }, [position, scale]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the tree
  });

  return (
    <group ref={treeRef} />
  );
};

export default Tree;
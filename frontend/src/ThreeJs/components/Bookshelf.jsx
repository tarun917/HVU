// src/ThreeJs/components/Bookshelf.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Bookshelf = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const bookshelfRef = useRef();

  useEffect(() => {
    // Create the shelf geometry and material
    const shelfGeometry = new THREE.BoxGeometry(2, 0.1, 0.5);
    const shelfMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });

    // Create the bookshelf frame
    const frameGeometry = new THREE.BoxGeometry(0.1, 2, 0.5);
    const frameMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });

    // Group all parts together
    const bookshelf = new THREE.Group();
    
    // Create shelves
    for (let i = 0; i <= 4; i++) {
      const shelf = new THREE.Mesh(shelfGeometry, shelfMaterial);
      shelf.position.y = i * 0.5;
      bookshelf.add(shelf);
    }

    // Create frame
    const frame1 = new THREE.Mesh(frameGeometry, frameMaterial);
    const frame2 = new THREE.Mesh(frameGeometry, frameMaterial);
    frame1.position.set(-1, 1, 0);
    frame2.position.set(1, 1, 0);
    bookshelf.add(frame1);
    bookshelf.add(frame2);

    // Position and scale the group
    bookshelf.position.set(...position);
    bookshelf.scale.set(...scale);

    // Add the bookshelf to the ref
    bookshelfRef.current.add(bookshelf);

    // Add lighting to the bookshelf
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    bookshelfRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (bookshelfRef.current) {
        bookshelfRef.current.remove(bookshelf);
        bookshelfRef.current.remove(light);
      }
    };
  }, [position, scale]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the bookshelf
  });

  return (
    <group ref={bookshelfRef} />
  );
};

export default Bookshelf;
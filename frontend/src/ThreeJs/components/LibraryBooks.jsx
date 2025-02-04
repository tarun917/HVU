// src/ThreeJs/components/LibraryBooks.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const LibraryBooks = ({ position = [0, 0, 0], scale = [1, 1, 1], bookCount = 50 }) => {
  const booksRef = useRef();

  useEffect(() => {
    // Create book geometry and material
    const bookGeometry = new THREE.BoxGeometry(0.5, 1, 0.2);
    const materials = [
      new THREE.MeshStandardMaterial({ color: 0x8b4513 }), // brown
      new THREE.MeshStandardMaterial({ color: 0xffc0cb }), // pink
      new THREE.MeshStandardMaterial({ color: 0x0000ff }), // blue
      new THREE.MeshStandardMaterial({ color: 0xffff00 }), // yellow
      new THREE.MeshStandardMaterial({ color: 0x00ff00 }), // green
    ];

    // Create a group to hold all books
    const booksGroup = new THREE.Group();

    for (let i = 0; i < bookCount; i++) {
      // Create a book with a random material
      const bookMaterial = materials[Math.floor(Math.random() * materials.length)];
      const book = new THREE.Mesh(bookGeometry, bookMaterial);

      // Randomize the position of each book within a range
      book.position.set(
        position[0] + Math.random() * 10 - 5,
        position[1] + Math.random() * 5 - 2.5,
        position[2] + Math.random() * 10 - 5
      );

      // Randomize the rotation of each book
      book.rotation.y = Math.random() * Math.PI;

      booksGroup.add(book);
    }

    // Position and scale the group
    booksGroup.position.set(...position);
    booksGroup.scale.set(...scale);

    // Add the books to the ref
    booksRef.current.add(booksGroup);

    // Add lighting to the books
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    booksRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (booksRef.current) {
        booksRef.current.remove(booksGroup);
        booksRef.current.remove(light);
      }
    };
  }, [position, scale, bookCount]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the books
  });

  return (
    <group ref={booksRef} />
  );
};

export default LibraryBooks;
// src/ThreeJs/components/AuditoriumSeats.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const AuditoriumSeats = ({ position = [0, 0, 0], scale = [1, 1, 1], rows = 5, columns = 10 }) => {
  const seatsRef = useRef();

  useEffect(() => {
    // Create the seat geometry and material
    const seatGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const seatMaterial = new THREE.MeshStandardMaterial({ color: 0x3b3b3b });

    // Create a group to hold all seats
    const seatsGroup = new THREE.Group();

    // Create seats in rows and columns
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const seat = new THREE.Mesh(seatGeometry, seatMaterial);
        seat.position.set(col - columns / 2, 0, row - rows / 2);
        seatsGroup.add(seat);
      }
    }

    // Position and scale the group
    seatsGroup.position.set(...position);
    seatsGroup.scale.set(...scale);

    // Add the seats group to the ref
    seatsRef.current.add(seatsGroup);

    // Add lighting to the seats
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    seatsRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (seatsRef.current) {
        seatsRef.current.remove(seatsGroup);
        seatsRef.current.remove(light);
      }
    };
  }, [position, scale, rows, columns]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the seats
  });

  return (
    <group ref={seatsRef} />
  );
};

export default AuditoriumSeats;
// src/ThreeJs/components/Table.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Table = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const tableRef = useRef();

  useEffect(() => {
    // Create the table top
    const topGeometry = new THREE.BoxGeometry(5, 0.2, 3);
    const topMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const top = new THREE.Mesh(topGeometry, topMaterial);
    top.position.y = 1.5; // Position the top so that its center is at y = 1.5

    // Create the table legs
    const legGeometry = new THREE.BoxGeometry(0.2, 3, 0.2);
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });

    const leg1 = new THREE.Mesh(legGeometry, legMaterial);
    leg1.position.set(-2.4, 0, -1.4); // Position leg1 at one corner

    const leg2 = new THREE.Mesh(legGeometry, legMaterial);
    leg2.position.set(2.4, 0, -1.4); // Position leg2 at another corner

    const leg3 = new THREE.Mesh(legGeometry, legMaterial);
    leg3.position.set(-2.4, 0, 1.4); // Position leg3 at another corner

    const leg4 = new THREE.Mesh(legGeometry, legMaterial);
    leg4.position.set(2.4, 0, 1.4); // Position leg4 at another corner

    // Group all parts together
    const table = new THREE.Group();
    table.add(top);
    table.add(leg1);
    table.add(leg2);
    table.add(leg3);
    table.add(leg4);

    // Position and scale the group
    table.position.set(...position);
    table.scale.set(...scale);

    // Add the table to the ref
    tableRef.current.add(table);

    // Add lighting to the table
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    tableRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (tableRef.current) {
        tableRef.current.remove(table);
        tableRef.current.remove(light);
      }
    };
  }, [position, scale]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the table
  });

  return (
    <group ref={tableRef} />
  );
};

export default Table;
// src/ThreeJs/components/CafeteriaTables.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const CafeteriaTables = ({ position = [0, 0, 0], scale = [1, 1, 1], rows = 3, columns = 3 }) => {
  const tablesRef = useRef();

  useEffect(() => {
    // Create table geometry and material
    const tableTopGeometry = new THREE.BoxGeometry(2, 0.1, 1);
    const tableLegGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 32);
    const tableMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });

    // Create a group to hold all tables
    const tablesGroup = new THREE.Group();

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        // Create table top
        const tableTop = new THREE.Mesh(tableTopGeometry, tableMaterial);
        tableTop.position.set(col * 3 - (columns - 1) * 1.5, 1, row * 3 - (rows - 1) * 1.5);
        
        // Create table legs
        const leg1 = new THREE.Mesh(tableLegGeometry, tableMaterial);
        const leg2 = new THREE.Mesh(tableLegGeometry, tableMaterial);
        const leg3 = new THREE.Mesh(tableLegGeometry, tableMaterial);
        const leg4 = new THREE.Mesh(tableLegGeometry, tableMaterial);

        leg1.position.set(-0.8, 0.5, -0.4);
        leg2.position.set(-0.8, 0.5, 0.4);
        leg3.position.set(0.8, 0.5, -0.4);
        leg4.position.set(0.8, 0.5, 0.4);

        // Group table top and legs
        const table = new THREE.Group();
        table.add(tableTop);
        table.add(leg1);
        table.add(leg2);
        table.add(leg3);
        table.add(leg4);

        tablesGroup.add(table);
      }
    }

    // Position and scale the group
    tablesGroup.position.set(...position);
    tablesGroup.scale.set(...scale);

    // Add the tables to the ref
    tablesRef.current.add(tablesGroup);

    // Add lighting to the tables
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    tablesRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (tablesRef.current) {
        tablesRef.current.remove(tablesGroup);
        tablesRef.current.remove(light);
      }
    };
  }, [position, scale, rows, columns]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the tables
  });

  return (
    <group ref={tablesRef} />
  );
};

export default CafeteriaTables;
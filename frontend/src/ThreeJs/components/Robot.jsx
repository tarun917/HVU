// src/ThreeJs/components/Robot.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Robot = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const robotRef = useRef();

  useEffect(() => {
    // Create the robot head
    const headGeometry = new THREE.BoxGeometry(1, 1, 1);
    const headMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.set(0, 1.5, 0);

    // Create the robot body
    const bodyGeometry = new THREE.BoxGeometry(1.5, 2, 1);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x777777 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(0, 0, 0);

    // Create the robot arms
    const armGeometry = new THREE.BoxGeometry(0.5, 1.5, 0.5);
    const armMaterial = new THREE.MeshStandardMaterial({ color: 0x777777 });
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-1.25, 0, 0);

    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(1.25, 0, 0);

    // Create the robot legs
    const legGeometry = new THREE.BoxGeometry(0.5, 1.5, 0.5);
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x777777 });
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.5, -1.75, 0);

    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.5, -1.75, 0);

    // Group all parts together
    const robot = new THREE.Group();
    robot.add(head);
    robot.add(body);
    robot.add(leftArm);
    robot.add(rightArm);
    robot.add(leftLeg);
    robot.add(rightLeg);

    // Position and scale the group
    robot.position.set(...position);
    robot.scale.set(...scale);

    // Add the robot to the ref
    robotRef.current.add(robot);

    // Add lighting to the robot
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(5, 5, 5);
    robotRef.current.add(light);

    return () => {
      // Cleanup on unmount
      if (robotRef.current) {
        robotRef.current.remove(robot);
        robotRef.current.remove(light);
      }
    };
  }, [position, scale]);

  useFrame(() => {
    // Optionally, add any animations or interactions with the robot
  });

  return (
    <group ref={robotRef} />
  );
};

export default Robot;
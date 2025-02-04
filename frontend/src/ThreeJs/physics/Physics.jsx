// src/ThreeJs/physics/Physics.jsx
import React from 'react';
import { Physics, useBox, usePlane } from '@react-three/cannon';

const Plane = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="lightgreen" />
    </mesh>
  );
};

const Box = ({ position }) => {
  const [ref] = useBox(() => ({ mass: 1, position }));
  return (
    <mesh ref={ref} position={position} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const PhysicsScene = () => {
  return (
    <Physics>
      <Plane />
      <Box position={[0, 5, 0]} />
    </Physics>
  );
};

export default PhysicsScene;
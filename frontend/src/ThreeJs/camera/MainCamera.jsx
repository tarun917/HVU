// src/ThreeJs/camera/MainCamera.jsx
import React, { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const MainCamera = () => {
  const { camera, setDefaultCamera } = useThree();
  const cameraRef = useRef();

  useEffect(() => {
    setDefaultCamera(cameraRef.current);
    cameraRef.current.position.set(0, 5, 10);
  }, [setDefaultCamera]);

  return <perspectiveCamera ref={cameraRef} fov={75} near={0.1} far={1000} />;
};

export default MainCamera;
// src/ThreeJs/weather/DayNightCycle.jsx
import React, { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { DirectionalLight } from 'three';

const DayNightCycle = () => {
  const { scene } = useThree();
  const lightRef = useRef();

  useEffect(() => {
    const light = new DirectionalLight(0xffffff, 1);
    light.position.set(0, 10, 0);
    scene.add(light);
    lightRef.current = light;

    return () => {
      scene.remove(light);
    };
  }, [scene]);

  useEffect(() => {
    const updateLightPosition = (time) => {
      const angle = (time / 24) * Math.PI * 2;
      if (lightRef.current) {
        lightRef.current.position.set(Math.sin(angle) * 10, Math.cos(angle) * 10, 0);
        lightRef.current.intensity = Math.max(0.1, Math.cos(angle) + 0.5); // Adjust intensity based on position
      }
    };

    const intervalId = setInterval(() => {
      const currentTime = new Date().getHours() + new Date().getMinutes() / 60;
      updateLightPosition(currentTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return null;
};

export default DayNightCycle;
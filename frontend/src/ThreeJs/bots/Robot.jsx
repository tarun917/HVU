// src/ThreeJs/bots/Robot.jsx
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { AnimationMixer } from 'three';

const Robot = ({ model, position }) => {
  const robotRef = useRef();
  const mixer = useRef();

  useEffect(() => {
    if (model) {
      mixer.current = new AnimationMixer(model);
      const action = mixer.current.clipAction(model.animations[0]);
      action.play();
      robotRef.current.add(model);
      model.position.set(0, 0, 0);
    }
  }, [model]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <group ref={robotRef} position={position}>
      <mesh>
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </group>
  );
};

export default Robot;
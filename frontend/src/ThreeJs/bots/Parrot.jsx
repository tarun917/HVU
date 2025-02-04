// src/ThreeJs/bots/Parrot.jsx
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { AnimationMixer } from 'three';

const Parrot = ({ model, position }) => {
  const parrotRef = useRef();
  const mixer = useRef();

  useEffect(() => {
    if (model) {
      mixer.current = new AnimationMixer(model);
      const action = mixer.current.clipAction(model.animations[0]);
      action.play();
      parrotRef.current.add(model);
      model.position.set(0, 0, 0);
    }
  }, [model]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <group ref={parrotRef} position={position}>
      <mesh>
        <boxGeometry args={[0.5, 0.5, 1]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  );
};

export default Parrot;
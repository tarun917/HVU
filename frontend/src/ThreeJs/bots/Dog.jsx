// src/ThreeJs/bots/Dog.jsx
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { AnimationMixer } from 'three';

const Dog = ({ model, position }) => {
  const dogRef = useRef();
  const mixer = useRef();

  useEffect(() => {
    if (model) {
      mixer.current = new AnimationMixer(model);
      const action = mixer.current.clipAction(model.animations[0]);
      action.play();
      dogRef.current.add(model);
      model.position.set(0, 0, 0);
    }
  }, [model]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <group ref={dogRef} position={position}>
      <mesh>
        <boxGeometry args={[1, 1, 2]} />
        <meshStandardMaterial color="brown" />
      </mesh>
    </group>
  );
};

export default Dog;
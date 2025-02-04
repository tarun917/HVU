// src/ThreeJs/animations/walk.jsx
import { useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { AnimationMixer } from 'three';

const WalkAnimation = ({ model }) => {
  useEffect(() => {
    if (!model) return;
    const mixer = new AnimationMixer(model);
    const action = mixer.clipAction(model.animations.find(clip => clip.name === 'Walk'));
    action.play();

    return () => {
      mixer.stopAllAction();
    };
  }, [model]);

  useFrame((state, delta) => {
    if (mixer) mixer.update(delta);
  });

  return null;
};

export default WalkAnimation;
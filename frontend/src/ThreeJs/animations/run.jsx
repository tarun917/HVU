// src/ThreeJs/animations/run.jsx
import { useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { AnimationMixer } from 'three';

const RunAnimation = ({ model }) => {
  useEffect(() => {
    if (!model) return;
    const mixer = new AnimationMixer(model);
    const action = mixer.clipAction(model.animations.find(clip => clip.name === 'Run'));
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

export default RunAnimation;
// threejs/scenes/GateScene.jsx
import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import Gate from "..Gate.jsx";

export default function GateScene() {
  const avatarRef = useRef();

  const handleKeyDown = (event) => {
    if (!avatarRef.current) return;

    switch (event.key) {
      case "w": avatarRef.current.position.z -= 0.5; break;
      case "s": avatarRef.current.position.z += 0.5; break;
      case "a": avatarRef.current.position.x -= 0.5; break;
      case "d": avatarRef.current.position.x += 0.5; break;
      default: break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <PointerLockControls />
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh ref={avatarRef} position={[0, 1, 5]} castShadow>
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <Gate position={[0, 0, -20]} />
    </Canvas>
  );
}

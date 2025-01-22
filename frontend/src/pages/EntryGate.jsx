// src/pages/EntryGate.jsx
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sky, PointerLockControls } from "@react-three/drei";

/**
 * A basic "avatar" example mesh that can move with keyboard.
 * In a real project, you'll import a GLTF/FBX model (your 3D avatar).
 */
function Avatar() {
  const ref = useRef();
  const speed = 0.05;   // movement speed
  const rotationSpeed = 0.03; // rotation speed
  // Keyboard state
  const [keysPressed, setKeysPressed] = useState({});

  // Capture key presses
  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeysPressed((prev) => ({ ...prev, [e.code]: true }));
    };
    const handleKeyUp = (e) => {
      setKeysPressed((prev) => ({ ...prev, [e.code]: false }));
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(() => {
    if (!ref.current) return;

    // Forward/Backward
    if (keysPressed["KeyW"]) {
      ref.current.position.z -= speed;
    }
    if (keysPressed["KeyS"]) {
      ref.current.position.z += speed;
    }
    // Left/Right
    if (keysPressed["KeyA"]) {
      ref.current.position.x -= speed;
    }
    if (keysPressed["KeyD"]) {
      ref.current.position.x += speed;
    }
    // Rotate left/right (demo)
    if (keysPressed["ArrowLeft"]) {
      ref.current.rotation.y += rotationSpeed;
    }
    if (keysPressed["ArrowRight"]) {
      ref.current.rotation.y -= rotationSpeed;
    }
    // Jump or any extra logic can go here...
  });

  return (
    <mesh ref={ref} position={[0, 1, 0]}>
      {/* A simple box to represent "avatar" – replace with 3D model */}
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
}

/**
 * A simple ground plane, so you can see the floor.
 */
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial color="#333" />
    </mesh>
  );
}

/**
 * The main EntryGate component – wraps everything in a Canvas.
 */
export default function EntryGate() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="p-6 text-center">
        <h1 className="text-3xl font-extrabold mb-2 neon-text">
          Virtual Campus Entry Gate
        </h1>
        <p className="text-gray-300 mb-4">
          Use <strong>W/A/S/D</strong> or <strong>Arrow keys</strong> to move your avatar. 
          <br/> 
          Move around the 3D environment, greet friends, and step into classrooms!
        </p>
      </div>

      {/* The 3D Canvas */}
      <Canvas
        shadows
        style={{ width: "100%", height: "calc(100vh - 140px)" }}
        camera={{ position: [0, 5, 10], fov: 60 }}
      >
        {/* Some ambient light + directional light */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 15, 10]} 
          intensity={1} 
          castShadow
        />

        {/* A sky for environment lighting (drei) */}
        <Sky sunPosition={[100, 20, 100]} />

        {/* The ground plane */}
        <Ground />

        {/* Our avatar mesh with keyboard movement */}
        <Avatar />

        {/**
         * Option 1: OrbitControls for free camera movement with mouse
         * But for full "First-Person" experience, you'd use <PointerLockControls />
         * or custom first-person code
         */}
        <OrbitControls enableDamping={false} />
        {/* <PointerLockControls /> // If you want a pointer lock style FPS camera */}
      </Canvas>
    </div>
  );
}
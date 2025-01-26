import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function Avatar() {
  const ref = useRef();
  const speed = 0.6; // Movement speed
  const rotationSpeed = 0.05;
  const [keysPressed, setKeysPressed] = useState({});

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

    const { position, rotation } = ref.current;

    // Movement
    if (keysPressed["KeyW"]) position.z -= speed; // Forward
    if (keysPressed["KeyS"]) position.z += speed; // Backward
    if (keysPressed["KeyA"]) position.x -= speed; // Left
    if (keysPressed["KeyD"]) position.x += speed; // Right

    // Rotation
    if (keysPressed["ArrowLeft"]) rotation.y += rotationSpeed; // Rotate left
    if (keysPressed["ArrowRight"]) rotation.y -= rotationSpeed; // Rotate right
  });

  return (
    <mesh ref={ref} position={[0, 2, 0]} castShadow>
      {/* Avatar geometry */}
      <boxGeometry args={[2, 4, 2]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

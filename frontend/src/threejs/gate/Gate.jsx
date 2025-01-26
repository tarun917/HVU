// threejs/gate/Gate.jsx
import React from "react";

export default function Gate({ position }) {
  return (
    <group position={position}>
      <mesh position={[-6, 15, 0]}>
        <boxGeometry args={[2, 30, 2]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[6, 15, 0]}>
        <boxGeometry args={[2, 30, 2]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[0, 30, 0]}>
        <boxGeometry args={[16, 2, 2]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[-5, 12.5, -1]}>
        <boxGeometry args={[1, 25, 10]} />
        <meshStandardMaterial color="darkred" />
      </mesh>
      <mesh position={[5, 12.5, -1]}>
        <boxGeometry args={[1, 25, 10]} />
        <meshStandardMaterial color="darkred" />
      </mesh>
    </group>
  );
}

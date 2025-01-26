import React from "react";

export default function Ground() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]} // Rotate to make it horizontal
      position={[0, 0, 0]} // Centered at the origin
      receiveShadow
    >
      {/* Large plane for the ground */}
      <planeGeometry args={[2000, 2000]} /> {/* Use `planeGeometry` for a thin ground */}
      <meshStandardMaterial
        color="green"
        roughness={0.8} // Adds texture realism
        metalness={0.1} // Slight metallic look
      />
    </mesh>
  );
}

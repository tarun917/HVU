import React from "react";

export default function Boundary() {
  const boundaryHeight = 10; // Height of the boundary walls
  const boundaryThickness = 1; // Thickness of the walls
  const boundaryLength = 2000; // Length/Width of the walls
  const translucentBoxSize = 2000; // Size of the translucent boundary box

  return (
    <group>
      {/* Boundary Walls */}
      {/* Left Wall */}
      <mesh position={[-boundaryLength / 2, boundaryHeight / 2, 0]} receiveShadow>
        <boxGeometry args={[boundaryThickness, boundaryHeight, boundaryLength]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Right Wall */}
      <mesh position={[boundaryLength / 2, boundaryHeight / 2, 0]} receiveShadow>
        <boxGeometry args={[boundaryThickness, boundaryHeight, boundaryLength]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, boundaryHeight / 2, -boundaryLength / 2]} receiveShadow>
        <boxGeometry args={[boundaryLength, boundaryHeight, boundaryThickness]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Front Wall */}
      <mesh position={[0, boundaryHeight / 2, boundaryLength / 2]} receiveShadow>
        <boxGeometry args={[boundaryLength, boundaryHeight, boundaryThickness]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Translucent Bounding Box */}
      <mesh position={[0, translucentBoxSize / 2, 0]}>
        <boxGeometry args={[translucentBoxSize, translucentBoxSize, translucentBoxSize]} />
        <meshStandardMaterial
          color="white"
          opacity={0.3}
          transparent
        />
      </mesh>
    </group>
  );
}

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import PropTypes from "prop-types";

export default function ThirdPersonCamera({ avatarRef, cameraHeight = 1.5 }) {
  const cameraAnchorRef = useRef();

  useFrame(({ camera }) => {
    if (!avatarRef?.current) return;

    // Get avatar's current position
    const avatar = avatarRef.current;
    camera.position.set(
      avatar.position.x,
      avatar.position.y + cameraHeight, // Adjust camera height
      avatar.position.z // Camera should stay at the same depth
    );
    camera.rotation.copy(avatar.rotation); // Sync camera rotation with avatar
  });

  return (
    <mesh ref={cameraAnchorRef} position={[0, cameraHeight, 0]} visible={false}>
      {/* Invisible mesh */}
      <boxGeometry args={[0.1, 0.1, 0.1]} />
    </mesh>
  );
}

// Prop validation
ThirdPersonCamera.propTypes = {
  avatarRef: PropTypes.object.isRequired,
  cameraHeight: PropTypes.number,
};

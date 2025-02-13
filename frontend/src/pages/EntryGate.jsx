import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, PointerLockControls } from "@react-three/drei";



const EntryGate = () => {
  const avatarRef = useRef();

  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col">
      {/* Header Section */}
      

      {/* 3D Canvas Section */}
      <div className="flex-grow relative">
        <Suspense fallback={''}>
          <Canvas
            shadows
            camera={{ position: [0, 5, 10], fov: 75 }} // कैमरा प्रारंभिक स्थिति
            className="canvas-container"
          >
            {/* लाइटिंग */}
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[10, 20, 10]}
              intensity={1.2}
              castShadow
              shadow-mapSize={{ width: 2048, height: 2048 }}
            />
            <hemisphereLight intensity={0.3} groundColor="gray" />

            {/* एनवायरनमेंट */}
            <Sky
              sunPosition={[150, 200, 100]}
              turbidity={8}
              rayleigh={1.2}
              azimuth={0.25}
            />

            {/* कंट्रोल्स */}
            <PointerLockControls /> {/* लॉक कर्सर */}
          </Canvas>
        </Suspense>
      </div>

      {/* Footer Section */}
      <footer className="p-4 text-center bg-gray-800 text-gray-500 text-sm">
        Built for an immersive virtual campus experience. <br />
        Explore, interact, and connect in the virtual world!
      </footer>
    </div>
  );
};

export default EntryGate;

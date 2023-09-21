import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Mountain = () => {
  const mountain = useGLTF("./mountain/scene.gltf");

  return (
    <mesh>
      <primitive
        object={mountain.scene}
        scale={0.9}
        position={[0, -7, 0]}
      />
    </mesh>
  );
};

const RotatingMountain = () => {
  const [rotation, setRotation] = useState(0);

  useFrame(() => {
    setRotation(rotation => rotation + 0.005); // Adjust rotation speed as needed
  });

  return (
    <mesh rotation={[0, rotation, 0]}>
    <hemisphereLight intensity={3} />
    {/* <spotLight
    position={[-20, 10, 10]}
    angle={0.12}
    penumbra={1}
    intensity={1}
    castShadow
    shadow-mapSize={1024}
    /> */}
    <pointLight intensity={1} />
      <Mountain />
    </mesh>
  );
};

const MountainCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 60 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <RotatingMountain />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default MountainCanvas;


import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Robot = () => {
  const robot = useGLTF("./robot/scene.gltf");

  return (
    <mesh>
      <primitive
        object={robot.scene}
        scale={0.9}
        position={[0, -1, -3]}
      />
    </mesh>
  );
};

const RobotCanvas = () => {

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 20, 20], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Robot/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;

import { motion } from "framer-motion";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Beach = ({ isMobile }) => {
  const beach = useGLTF("./beach/scene.gltf");

  return (
    <mesh>
      <primitive
        object={beach.scene}
        scale={isMobile? 0.5 : 0.8}
        position={isMobile? [0, -1, 0] : [0, -1.6, 0]}
      >
      </ primitive>
    </mesh>
  );
};

const RotatingBeach = ({ isMobile }) => {
  const [rotation, setRotation] = useState(0);

  useFrame(() => {
    setRotation(rotation => rotation + 0.005); // Adjust rotation speed as needed
  });

  return (
    <mesh rotation={[0, rotation, 0]}>
      <Beach isMobile = { isMobile }/>
    </mesh>
  );
};

const BeachCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <RotatingBeach isMobile = {isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BeachCanvas;


import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Bitcoin from "./Bitcoin1";

export const WhyUs3d = () => {
  return (
    <Canvas>
      <Bitcoin />
      <ambientLight color="white" intensity={1} />
      <directionalLight position={[10, 30, 30]} intensity={1} />
      <directionalLight position={[-10, -30, -30]} intensity={1} />
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

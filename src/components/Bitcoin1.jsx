import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/bitcoin1-transformed.glb");
  return (
    <group {...props} dispose={null} scale={0.05}>
      <mesh
        geometry={nodes.Cylinder002__0.geometry}
        material={materials["Scene_-_Root"]}
        position={[3, 3, 1]}
      />
    </group>
  );
}

useGLTF.preload("/bitcoin1-transformed.glb");

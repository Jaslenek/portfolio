import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";

export function Plane({ isRotating, setCurrentStage, ...props }) {
  const group = useRef();

  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions["Take 001"]) {
      if (isRotating) {
        actions["Take 001"].play();
      } else {
        actions["Take 001"].stop();
      }
    }
  }, [actions, isRotating]);

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
        setCurrentStage(3);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setCurrentStage(1);
      }}
    >
      <primitive object={scene} />
    </group>
  );
}
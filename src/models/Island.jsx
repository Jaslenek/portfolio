import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/3d/island.glb";

export function Island({
  isRotating,
  setIsRotating,
  setCurrentStage,
  ...props
}) {
  const islandRef = useRef();

  const { viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  // ------------------ POINTER EVENTS ------------------

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setIsRotating(true);
    lastX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();

    if (!isRotating) return;

    const delta = (e.clientX - lastX.current) / viewport.width;

    islandRef.current.rotation.y += delta * 0.01 * Math.PI;
    lastX.current = e.clientX;

    rotationSpeed.current = delta * 0.01 * Math.PI;
  };

  // ------------------ KEYBOARD EVENTS ------------------

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        setIsRotating(true);
        islandRef.current.rotation.y += 0.01 * Math.PI;
        rotationSpeed.current = 0.02;
      }

      if (event.key === "ArrowRight") {
        setIsRotating(true);
        islandRef.current.rotation.y -= 0.01 * Math.PI;
        rotationSpeed.current = -0.02;
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setIsRotating(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // ------------------ ANIMATION + STAGES ------------------

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      const segment = (2 * Math.PI) / 8;
      const stage = Math.floor(normalizedRotation / segment) + 1;

      setCurrentStage(stage);
    }
  });

  // ------------------ MODEL ------------------

  return (
    <a.group
      ref={islandRef}
      {...props}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      <mesh geometry={nodes.polySurface944_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface945_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface946_tree2_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface947_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface948_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface949_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.pCube11_rocks1_0.geometry} material={materials.PaletteMaterial001} />
    </a.group>
  );
}
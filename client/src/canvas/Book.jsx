import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

const Book = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/book.glb');

  const fullTexture = useTexture(snap.fullDecal);
//   useFrame((state, delta) =>
//     easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
//   );

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.Architexture_0.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        <Decal
          position={[0.4, 0, 0]}
          rotation={[0, 0, 0]}
          scale={1}
          map={fullTexture}
        />
      </mesh>
    </group>
  );
};

export default Book;

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModeloWedge() {
  const { scene } = useGLTF("/models/wedge_plateform_shoe-optimo.glb");

  return (
    <Canvas camera={{ position: [30, 20, 30], fov: 35 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 1]} />
      <OrbitControls
       autoRotate={true}
      enableZoom />
      <primitive
        object={scene}
        scale={5}
        position={[0, -10, 0]}
        rotation={[0, 0.2, 0]}
      />
    </Canvas>
  );
}

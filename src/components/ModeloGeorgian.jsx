import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModeloGeorgian() {
  const { scene } = useGLTF("/models/georgian_shoes-optimo.glb");

  return (
    <Canvas camera={{ position: [30, 20, 0], fov: 35 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 1]} />
      <OrbitControls
       autoRotate={true}
      enableZoom />
      <primitive
        object={scene}
        scale={40}
        position={[0, -5, 0]}
        rotation={[0, 0, 0]}
      />
    </Canvas>
  );
}

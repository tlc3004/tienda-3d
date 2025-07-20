import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModeloElrondsRing() {
  const { scene } = useGLTF("/models/vilya._elronds_ring-optimo.glb");

  return (
    <Canvas camera={{ position: [0, 0, 1], fov: 60 }}>
      <ambientLight intensity={90} />
      <directionalLight position={[100, 100, 100]} />
      <OrbitControls 
        autoRotate={true}
      enableZoom />
      <primitive
        object={scene}
        scale={1}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </Canvas>
  );
}

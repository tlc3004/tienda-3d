import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModeloSciFi() {
  const { scene } = useGLTF("/models/sci-fi_shoe-optimo.glb");

  return (
    <Canvas camera={{ position: [5, 0, -10], fov: 50 }}>
      <ambientLight intensity={10} />
      <directionalLight position={[50, 50, 0]} />
      <OrbitControls 
        autoRotate={true}
      enableZoom />
      <primitive
        object={scene}
        scale={40}
        position={[0, -3, 0]}
        rotation={[0, 0, 0]}
      />
    </Canvas>
  );
}

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModeloCorset() {
  const { scene } = useGLTF("/models/corset-optimo.glb");

  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 25 }}    
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls target={[0, 1, 0]} />
      <primitive
        object={scene}
        scale={1.2}
        position={[0, -1.2, 0]}
        rotation={[0, Math.PI, 0]}
      />
    </Canvas>
  );
}

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModeloNike() {
  const { scene } = useGLTF("/models/air_jordan_1-optimo.glb");

  return (
    <Canvas camera={{ position: [5, 0, 50], fov: 10 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[20, 20, 10]} />
      <OrbitControls 
        autoRotate={true}
      enableZoom />
      <primitive
        object={scene}
        scale={.2}
        position={[0, -2, 0]}
        rotation={[0, 0, 0]}
      />
    </Canvas>
  );
}

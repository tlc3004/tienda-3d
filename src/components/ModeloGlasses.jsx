import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModeloGlasses() {
  const { scene } = useGLTF("/models/glasses-optimo.glb");

  return (
    <Canvas camera={{ position: [5, 0, 300], fov: 10 }}>
      <ambientLight intensity={5} />
      <directionalLight position={[30, 50, 10]} />
      <OrbitControls 
        autoRotate={true}
      enableZoom />
      <primitive
        object={scene}
        scale={.1}
        position={[0, -2, 0]}
        rotation={[0, 0, 0]}
      />
    </Canvas>
  );
}

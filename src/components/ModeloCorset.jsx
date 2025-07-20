import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";


export default function ModeloCorset() {
  const { scene } = useGLTF("/models/corset-optimo.glb");

  return (
    <Canvas camera={{ position: [0, 20, -18], fov: 5 }}>
      <ambientLight intensity={5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls
        enableRotate={false}
        enableZoom={true}
        enablePan={true}
      />
      <primitive
        object={scene}
        scale={20}
        position={[-30, -50, 50]}
        rotation={[0, 0, 0]}
      />
    </Canvas>
  );
}

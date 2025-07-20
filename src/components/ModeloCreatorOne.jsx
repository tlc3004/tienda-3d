import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModeloCreatorOne() {
  const { scene } = useGLTF("/models/rtfkt_creator_one-optimo.glb");

  return (
    <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
      <ambientLight intensity={.5} />
      <directionalLight position={[30, 30, 10]} />
      <OrbitControls 
        autoRotate={true}
      enableZoom />
      <primitive
        object={scene}
        scale={1}
        position={[0, -15, 0]}
        rotation={[0, 0, 0]}
      />
    </Canvas>
  );
}

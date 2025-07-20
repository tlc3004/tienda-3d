import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModeloGemsStone() {
  const { scene } = useGLTF("/models/gemstone_necklace-optimo.glb");

  return (
    <Canvas camera={{ position: [0, 0, 1], fov: 50 }}>
      <ambientLight intensity={100} />
      <directionalLight position={[10, 10, 50]} />
      <OrbitControls 
        autoRotate={true}
      enableZoom />
      <primitive
        object={scene}
        scale={10}
        position={[0, 10, 0]}
        rotation={[0, 0, 0]}
      />
    </Canvas>
  );
}

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModeloGemsStone() {
  const { scene } = useGLTF("/models/gemstone_necklace-optimo.glb");

  return (
    <Canvas camera={{ position: [0, 0, 30], fov: 50 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0]} />
      <OrbitControls 
        autoRotate={true}
      enableZoom />
      <primitive
        object={scene}
        scale={5}
        position={[0, -15, 0]}
        rotation={[0, 0, 0]}
      />
    </Canvas>
  );
}

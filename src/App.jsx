import ModalZapatilla from "./components/ModeloZapatilla"

import { useGLTF } from "@react-three/drei";

export default function ModeloZapatilla({ glbFile, ...props }) {
  const { scene } = useGLTF(`/models/${glbFile}`);
  return <primitive object={scene} {...props} />;
}

    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-6 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">✨ Pasarela 3D Fashion ✨</h1>
      <ModalZapatilla />
    </div>
  

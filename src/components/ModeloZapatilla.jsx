// src/components/ModalZapatilla.jsx
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { useState } from "react"

const modelos = [
  { nombre: "Air Jordan 1", imagen: "/models/air_jordan_1.glb", glb: "air_jordan_1.glb" },
  { nombre: "Caterpillar Boot", imagen: "/models/caterpillar_work_boot.glb", glb: "caterpillar_work_boot.glb" },
  { nombre: "Coraline Boot", imagen: "/models/coraline_riding_boot.glb", glb: "coraline_riding_boot.glb" },
  { nombre: "Gandalf's Ring", imagen: "/models/narya_gandalfs_ring.glb", glb: "narya_gandalfs_ring.glb" },
  { nombre: "Nike Pegasus", imagen: "/models/nike_air_zoom_pegasus_36.glb", glb: "nike_air_zoom_pegasus_36.glb" },
  { nombre: "Anillo de Diamante", imagen: "/models/ring_gold_with_diamond.glb", glb: "ring_gold_with_diamond.glb" },
]

function Modelo3D({ archivo }) {
  const { scene } = useGLTF(`/models/${archivo}`)
  return <primitive object={scene} scale={2} />
}

export default function ModalZapatilla() {
  const [seleccionado, setSeleccionado] = useState(null)

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {modelos.map((modelo) => (
          <div
            key={modelo.glb}
            onClick={() => setSeleccionado(modelo)}
            className="cursor-pointer bg-white p-4 rounded-xl shadow hover:scale-105 transition-transform"
          >
            <img src={modelo.imagen} alt={modelo.nombre} className="w-full h-40 object-contain" />
            <h2 className="text-center mt-2 font-bold text-purple-700">{modelo.nombre}</h2>
          </div>
        ))}
      </div>

      {seleccionado && (
        <div className="w-full h-[400px] bg-white rounded-xl shadow-xl p-4 mt-6">
          <Canvas>
            <ambientLight />
            <directionalLight position={[5, 5, 5]} />
            <OrbitControls />
            <Modelo3D archivo={seleccionado.glb} />
          </Canvas>
        </div>
      )}
    </div>
  )
}

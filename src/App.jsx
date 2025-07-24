import { useState } from "react";
import ModeloBota from "./components/ModeloBota";
import ModeloNike from "./components/ModeloNike";
import ModeloCaterpillar from "./components/ModeloCaterpillar";
import ModeloRing from "./components/ModeloRing";
// import ModeloCorset from "./components/ModeloCorset";
import ModalEscenario from "./components/ModalEscenario";
import ModeloLeather from "./components/ModeloLeather";
import ModeloNikeZoom from "./components/ModeloNikeZoom";
import ModeloCreatorOne from "./components/ModeloCreatorOne";
import ModeloElrondsRing from "./components/ModeloElrondsRing";
import ModeloGemsStone from "./components/ModeloGemsStone";
import ModeloGlasses from "./components/ModeloGlasses";
import ModeloSciFi from "./components/ModeloSciFi";
import ModeloWedge from "./components/ModeloWedge";
import ModeloGeorgian from "./components/ModeloGeorgian";


// usamos la misma base para todos: .glb y .png en /models/
const modelos = [
  { nombre: "Coraline Boot", clave: "coraline_riding_boot", componente: <ModeloBota /> },
  { nombre: "Caterpillar", clave: "caterpillar_work_boot", componente: <ModeloCaterpillar /> },
  { nombre: "Nike Jordan", clave: "air_jordan_1", componente: <ModeloNike /> },
  { nombre: "Gold Ring", clave: "ring_gold_with_diamond", componente: <ModeloRing /> },
  // { nombre: "Corset", clave: "corset", componente: <ModeloCorset /> },
  { nombre: "Leather", clave: "leather_shoes", componente: <ModeloLeather /> },
  { nombre: "Nike Air Zoom", clave: "nike_air_zoom_pegasus_36", componente: <ModeloNikeZoom /> },
  { nombre: "Creator One", clave: "rtfkt_creator_one", componente: <ModeloCreatorOne /> },
  { nombre: "El Ronds Ring", clave: "vilya._elronds_ring", componente: <ModeloElrondsRing /> },
  { nombre: "Lentes", clave: "glasses", componente: <ModeloGlasses /> },
  { nombre: "Sci-Fi Shoes", clave: "sci-fi_shoe", componente: <ModeloSciFi /> },
  { nombre: "Wedge Plateform", clave: "wedge_plateform_shoe", componente: <ModeloWedge /> },
  { nombre: "Georgian Shoes", clave: "georgian_shoes", componente: <ModeloGeorgian /> },
  { nombre: "Gems Stone Necklace", clave: "gemstone_necklace", componente: <ModeloGemsStone /> },
];

export default function App() {
  const [modalActual, setModalActual] = useState(null);

  const cerrarModal = () => setModalActual(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-coral-400 to-blue-500 p-6 text-white">
      <h1 className="text-4xl font-bold text-center mb-20">Virtual Boutique 3D </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-center">
        {modelos.map((modelo) => (
          <div
            key={modelo.clave}
            onClick={() => setModalActual(modelo.clave)}
            className="bg-white rounded-xl shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={`/models/${modelo.clave}.png`}
              alt={modelo.nombre}
              className="w-full h-50 object-cover mb-2"
            />
            <h2 className="text-center text-blue-700 font-bold">{modelo.nombre}</h2>
          </div>
        ))}
      </div>

      {modalActual && (
        <ModalEscenario onCerrar={cerrarModal}>
          {modelos.find((m) => m.clave === modalActual)?.componente}
        </ModalEscenario>
      )}
    </div>
  );
}

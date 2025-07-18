import { useGLTF } from "@react-three/drei";
 
export default function ModeloZapatilla(props){
    const {scene} = useGLTF('')
    return <primitive object={scene}{...props}/>
}
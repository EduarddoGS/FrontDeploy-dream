import {
    Cylinder,
    MeshReflectorMaterial,
    OrbitControls,
} from "@react-three/drei";
import { useRef, useState} from 'react';
import { Marker } from "../../Componentes3D/Marker";

import './building.css'
import { useFrame } from "@react-three/fiber";

export const MarkerA = () => {

    const objectRefA = useRef();

    const [direction, setDirection] = useState(1); // Estado para controlar la dirección del movimiento
    

    // Define la animación para el movimiento arriba y abajo
    useFrame((state, delta) => {
        // delta es el tiempo transcurrido desde la última actualización de frame en segundos
        const speed = 1; // Ajusta la velocidad según sea necesario
        const currentPosition = objectRefA.current.position.y;
        const newPosition = currentPosition + direction * speed * delta;

        if (newPosition >= 19 || newPosition <= 18.6) {
            setDirection((prevDirection) => -prevDirection);
        }

        objectRefA.current.position.y = newPosition;

        objectRefA.current.rotation.y += 0.02;


    }, { fps: 60 }); // Ajusta fps según sea necesario




    return(
        <>
            {/*Markers */}
            <mesh ref = {objectRefA} scale={[2,2,2]} position={[4,18.6,5]} rotation={[0,0,0]}>
            <Marker />
            <meshNormalMaterial />
            </mesh>


        </>
    )
}

export default MarkerA
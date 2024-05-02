import {
    Cylinder,
    MeshReflectorMaterial,
    OrbitControls,
} from "@react-three/drei";
import { useRef, useState} from 'react';
import { Marker } from "../../Componentes3D/Marker";

import './building.css'
import { useFrame } from "@react-three/fiber";

export const MarkerB = () => {

    const objectRefB = useRef();

    const [direction, setDirection] = useState(1); // Estado para controlar la dirección del movimiento
    

    // Define la animación para el movimiento arriba y abajo
    useFrame((state, delta) => {
        // delta es el tiempo transcurrido desde la última actualización de frame en segundos
        const speed = 1.1; // Ajusta la velocidad según sea necesario
        const currentPosition = objectRefB.current.position.y;
        const newPosition = currentPosition + direction * speed * delta;

        if (newPosition >= 23 || newPosition <= 22.6) {
            setDirection((prevDirection) => -prevDirection);
        }

        objectRefB.current.position.y = newPosition;

        objectRefB.current.rotation.y += 0.02;


    }, { fps: 60 }); // Ajusta fps según sea necesario




    return(
        <>
            {/*Markers */}
            <mesh ref = {objectRefB} scale={[2,2,2]} position={[-15,22.6,19]} rotation={[0,20.4,0]}>
            <Marker />
            <meshNormalMaterial />
            </mesh>


        </>
    )
}

export default MarkerB
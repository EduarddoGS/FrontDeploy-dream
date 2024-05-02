import React, {useState, useRef, useContext} from "react";
import { useReservaContext } from '../../context/reservaContext.jsx';
import {OrbitControls} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { Building1 } from "../../Componentes3D/Building1";
import { Building2 } from "../../Componentes3D/Building2";
import { Fuente } from "../../Componentes3D/Fuente";
import { Lampara } from "../../Componentes3D/Lampara";
import { Floor2 } from "../../Componentes3D/Floor2";
import { Arbol } from "../../Componentes3D/Arbolito";
import { EdificioDREAM2 } from "../../Componentes3D/EdificiosDREAM2";
import { Plan } from "../../Componentes3D/Plan";
import { Room1 } from "../../Componentes3D/Room1";
import { ModelosEdificiosDREAM } from "../../Componentes3D/ModelosEdificiosDREAM.jsx";
import { LegoRoom } from "../../Componentes3D/CuartoIndividualLegoRoom.jsx";
import './building.css'
import { useFrame } from "@react-three/fiber";
import MarkerA from "./MarkerA";
import MarkerB from "./MarkerB";

export const Experience = ({ onMeshClick,onMeshClick2 }) => {
    const { reserva, setReserva } = useReservaContext();

    const [clicked, setClicked] = useState(false);
    const [modelsVisible, setModelsVisible] = useState(true);
    const [modelsVisible2, setModelsVisible2] = useState(true);
    const [modelsVisible3, setModelsVisible3] = useState(true);
    const [modelsVisible4, setModelsVisible4] = useState(true);
    const [modelsVisible5, setModelsVisible5] = useState(true);
    const [activated, setActivated] = useState(false);
    const [activated2, setActivated2] = useState(false);

    const { camera } = useThree();
    const controls = useRef();
    
    useFrame(({}) => {
        

        if (!modelsVisible2 && !activated) {
            
            controls.current.enabled = false;
            gsap.to(camera.position, {
                duration:  0.9,
                x: 0,
                y: 7,
                z: 2,
                onUpdate: () => {
                    // Aquí puedes ajustar el FOV
                    camera.fov = 50; // Por ejemplo, 45 grados
                    camera.updateProjectionMatrix();
                    
                },
                onComplete: () => {
                    //controls.current.enabled = true; // Reactivar los controles de órbita después de la animación
                    setActivated(true); // Marcar como activado para evitar repeticiones
                    setModelsVisible(false);
                    controls.current.enabled = true;
                }
               
                
            });
        }



    });

    const handleClick = () => {
        
            console.log("hola");
            setModelsVisible2(false);
            onMeshClick2();
    };





    const handleClick2 = () => {
        
        console.log("click en el room");
        setReserva({
            ...reserva,
            id_sala: 1,
        })
        setModelsVisible3(false);
        onMeshClick();
        
    };

    useFrame(({}) => {
        if (!modelsVisible3 && !activated2) {
            controls.current.enabled = false;
            gsap.to(camera.position, {
                duration:  1.8,
                x: 0,
                y: -3,
                z: 5,
                onUpdate: () => {
                    // Aquí puedes ajustar el FOV
                    camera.fov = 42; // Por ejemplo, 45 grados
                    camera.updateProjectionMatrix();
                    camera.lookAt(0,-10,-3);
                    //console.log("Posición durante de la animación:", camera.position.x, camera.position.y, camera.position.z);
                    
                },
                onComplete: () => {
                    setActivated2(true); // Marcar como activado para evitar repeticiones
                    setModelsVisible2(true);
                    //console.log("Posición después de la animación:", camera.position.x, camera.position.y, camera.position.z);
                    setModelsVisible4(false);
                    controls.current.enabled = true;
                    
                }
               
                
            });
        }
        //console.log("Posición después de la animación:", camera.position.x, camera.position.y, camera.position.z);
        if(!modelsVisible3){
            camera.lookAt(0,-10,-3);
        }
        
    });

    
    return(
        <>
        <>
            <OrbitControls ref={controls}/>
           
                        {/*Lights */}
                        <ambientLight intesity={1.5}/>
            <directionalLight position={[15,25,5]} intensity={1.5}  color={"#9e69da"} />
            {modelsVisible && (
                <>
                
           


            {/*Floor */}
            
            <Floor2 scale={[ 15,2,16]} position={[-5,-1.6,0]} rotation={[0,56.5,0]} />

            {/*Buildings*/}

            
            <Building1 scale={[10,10,8.5]} position={[-15,-1.6,19]} rotation={[0,56.5,0]}/>
            
            {/*}
            <mesh onClick={handleClick}>
            <Building2 scale={[10,10,10]} position={[5,-1.6,-1]} rotation={[0,20.36,0]}/>
            </mesh>
            */}

            {/*<EdificioDREAM scale={[0.04,0.04,0.04]} position={[-15,0,-18]} rotation={[0,56.5,0]}/>*/}
            
            <Building2 scale={[10,10,8]} position={[-14,-1.6,-21]} rotation={[0,56.5,0]}/>
            <mesh onClick={handleClick}>
            <ModelosEdificiosDREAM scale={[0.04,0.04,0.04]} position={[6,-1.75,-6]} rotation={[0,3.09,0]} />
            </mesh>

            
            


            {/*Markers */}
            <MarkerA />
            <MarkerB />

            {/* Arbol */}

            <Arbol scale={[8,8,8]} position={[3,2.8,18]} rotation={[0,0,0]} />
            <Arbol scale={[8,8,8]} position={[-28,2.8,15]} rotation={[0,0,0]} />
            <Arbol scale={[8,8,8]} position={[-28,2.8,-23]} rotation={[0,0,0]} />
            <Arbol scale={[8,8,8]} position={[10,2.8,-20]} rotation={[0,0,0]} />

            {/*Fuente */}
            <Fuente scale={[1.5,1.5,1.5]} position={[-15,0.3,0]} rotation={[0,0,0]} />

            {/*Postes */}
            <Lampara scale={[0.5,0.5,0.5]} position={[-27,-1.6,-18]} rotation={[0,0,0]} />
            <Lampara scale={[0.5,0.5,0.5]} position={[5,-1.6,-22]} rotation={[0,0,0]} />
            <Lampara scale={[0.5,0.5,0.5]} position={[8,-1.6,22]} rotation={[0,0,0]} />
            <Lampara scale={[0.5,0.5,0.5]} position={[-25,-1.6,22]} rotation={[0,0,0]} />
            </>
            )}

            {/*Interior */}
            {!modelsVisible && modelsVisible4 && (
                <Plan scale={[0.01,0.01,0.01]} position={[-20,-2,2]} rotation={[0,0,0]} />
                
            )}

            
            
            {!modelsVisible && modelsVisible4 && (
                <mesh onClick={handleClick2} position={[0,-1,1.3]}>
                <boxGeometry args={[2, 2, 1.4]}  />
                <meshBasicMaterial transparent opacity={0} />
                </mesh>
            )}

            
            {!modelsVisible3  && (
                /*<Room1 scale={[1,1,1] } position={[0.25,-10.5,-3]} rotation={[0,0,0]} />*/
                <LegoRoom scale={[0.25,0.28,0.25]} position={[0.25,-10.5, -3]} rotation={[0,3.14,0]} />
            )}
                
        </>
        </>
    )
}
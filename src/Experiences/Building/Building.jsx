import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience'
import {Suspense} from "react";
import { Physics } from "@react-three/rapier";
import Navbar from '../../Componentes/Header/header';
import Reserva from '../../Componentes/Reserva/Reserva';
import Pasos from '../../Componentes/Pasos/Pasos';
import './building.css'


function Building() {
  const [reservaVisible, setReservaVisible] = useState(false);
  const [pasosVisible, setPasosVisible] = useState(false);
  return (
    <>
    <div className="viewheight">

      <Navbar />

      <div className="All-Container">

        <div className="Reserva-container" style={{ display: reservaVisible ? 'flex' : 'none'}}>
          <Reserva/>
        </div>
        
        <div className={`Canvas-container ${reservaVisible ? 'half-width' : 'full-width'}`}>
          <div className="Canvas-container2">
          <Canvas style={{ width: "100%", height: "100%" }} shadows camera={{ position: [-50,10, -2], fov: 80 }}>
          <fog attach="fog" args={["#dbecfb,30,40"]} />
          <Suspense>
            <Physics debug>
            <Experience onMeshClick={() => {
              
              setReservaVisible(true)}}  onMeshClick2={() => {setPasosVisible(true)}}/>
            </Physics>
          </Suspense>
          </Canvas>
          </div>
    
      </div>
    </div>

    <div className="Pasos-container"  style={{ display: pasosVisible ? 'flex' : 'none'}}>
      <Pasos />
    </div>

    </div>
    </>
  )
}

export default Building

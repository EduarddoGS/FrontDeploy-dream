import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ExperienceInterior } from './ExperienceInterior';
import {Suspense} from "react";
import { Physics } from "@react-three/rapier";
import Navbar from '../../Componentes/Header/header';
import '..//Building/building.css'


function InteriorA() {

  return (
    <>
    <div>
      <Navbar />
      <div className="Canvas-container">
        <Canvas style={{ width: "100vw", height: "80vh" }} shadows camera={{ position: [0,10, -2], fov: 80 }}>
        <fog attach="fog" args={["#dbecfb,30,40"]} />
        <Suspense>
          
          <ExperienceInterior/>
         
        </Suspense>
        </Canvas>
    </div>
    </div>
    </>
  )
}

export default InteriorA

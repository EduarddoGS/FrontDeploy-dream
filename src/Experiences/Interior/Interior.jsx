import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import ExperienceInterior from './ExperienceInterior';
import {Suspense} from "react";
import { Physics } from "@react-three/rapier";



function Interior() {

  return (
    <>
    <div >

        <div className="canvasContainer3">
          <div className="Canvas-container3">
            <Canvas style={{ width: "100%", height: "100%" }} shadows camera={{ position: [-5,0, 0], fov: 70 }}>
            <fog attach="fog" args={["#dbecfb,30,40"]} />
            <Suspense>
                <Physics debug>
                <ExperienceInterior/>
                </Physics>
            </Suspense>
            </Canvas>
            </div>
        </div>
    </div>

    </>
  )
}

export default Interior
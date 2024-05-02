import React, {useState, useRef} from "react";
import {
    Cylinder,
    MeshReflectorMaterial,
    OrbitControls,
    
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import { LegoRoom } from "../../Componentes3D/CuartoIndividualLegoRoom";



export  const ExperienceInterior = () => {
   
    
    return(
     
        <>
        <>
        
            {/*!clicked && (
                <OrbitControls />
            )*/}
            
            <OrbitControls />

            {/*Lights */}
            <ambientLight intesity={1.5}/>
            <directionalLight position={[15,25,5]} intensity={1.5}  color={"#9e69da"} />
            
            {/*Interior */}
            <LegoRoom scale={[0.25,0.28,0.25]} position={[1,-2, 0]} rotation={[0,1.55,0]} />

            
            
        </> 
        </>
        
    )
}

export default ExperienceInterior;



/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/Modelos3D/fuente.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Fuente(props) {
  const { nodes, materials } = useGLTF('./Modelos3D/fuente.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Fountain1.geometry} material={materials.Fountain1} />
    </group>
  )
}

useGLTF.preload('./Modelos3D/fuente.glb')

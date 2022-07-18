import { MeshDistortMaterial } from '@react-three/drei'
import React from 'react'



function Circle() {
      
  return (
    <mesh >
        <sphereBufferGeometry attach="geometry" visible args={[3,100,200]} />
        <MeshDistortMaterial color="#8352fd" attach="material" distort={0.3} speed={1.7} roughness={0}/>
    </mesh>
  )
}

export default Circle
import React from 'react'
import './home.css'
import Navbar  from './Navbar'
import {Canvas} from '@react-three/fiber'
import Circle from './Circle'
import {OrbitControls} from '@react-three/drei'

function Home() {
  return (
  <>
      <section className='home1' >
        < Navbar />
        <div className='name_circle'>
          <div className='info'>
            <h3 className='infoline1'>Hello,</h3>
            <h3 className='infoline2'>My Name is </h3>
            <h1 className='infoline3'>VYSAKH M NAIR</h1>
            <h2 className='infoline4'>I am a <span className='infoline5'> MEARN Stack Developer</span> </h2>
          </div>
          <div>
          <Canvas className='canvas'>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={.3} />
            <directionalLight intensity={1} color="red"/>

          <Circle />
          </Canvas>
          </div>
        </div>
      </section>
      <section>

      </section>
  
  </>

  )
}

export default Home
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Loader from '../components/Loader'
import Fox from '../modals/Fox'
import { Environment, OrbitControls } from '@react-three/drei'

type HomeProps = Record<string, string>

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute flex items-center justify-center w-48 h-48 p-3 bg-gray-200 rounded-md top-4 right-4">
        <div className="w-32 h-32 bg-gray-900 "></div>
      </div>
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{
          near: 0.1,
          far: 1000
        }}
      >
        <directionalLight intensity={0.1} position={[0.15, 0.15, 0.15]} />
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <Environment preset="forest" />
        <Suspense fallback={<Loader />}>
          <Fox position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[0.15, 0.15, 0.15]} />
        </Suspense>
      </Canvas>
    </div>
  )
}
export default Home

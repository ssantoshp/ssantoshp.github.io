'use client'
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Grid from '../src/components/Grid';
 

export default function Home() {
  return (
    <main className="flex flex-col h-screen overflow-y-scroll">
      
      <Image
          src="/img/planet.webp"
          alt="magic planet"
          width={1023}
          height={1024}
          style={{ width: '50%', height: 'auto', top: '-20vw', left: '-11vw', position: 'absolute' }}
      />
      
        <div className='flex flex-col items-center h-screen mb-12'>
          <Grid />
        </div>
        {/*
        <Spline scene="https://prod.spline.design/iNbJVcUnC-wiSALD/scene.splinecode"/> 
        */}
    </main>
  )
}
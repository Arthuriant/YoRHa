import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Mod2b from '../ModA2'
import Background from '../../assets/background-a.png'
import { Typewriter } from 'react-simple-typewriter'
import A2Icon from '../../assets/A2Icon.webp'
import A4Icon from '../../assets/A4Icon.webp'
import { useIsMobile } from '../hooks/useIsMobile'

const Banner2 = () => {
    const isMobile = useIsMobile;

    const characterData = {
    name: 'YoRHa Type A ',
    subtitle: '正式名称 : ヨルハA型二号',
    description: `A prototype of the YoRHa line, Type A No.2 (A2) is a lone warrior known for her high combat efficiency and silent demeanor. Originally deployed in the early stages of the machine war, she deserted the YoRHa forces for unknown reasons. Despite being marked for termination, she continues to fight the machine lifeforms alone.`,
    quotes: [
        `"Shut up and get out of my way."`,
        `"I'm not here to save anyone. I just have things I need to do."`,
        `"I don't care about orders anymore. All I want is revenge."`,
        `"This pain... it makes me feel alive."`
    ],
    androidIcons: [
      { src: A2Icon, label: "A2" },
      { src: A4Icon, label: "A4" },
    ]
    }


  return (
    


    <div  className=' min-h-screen relative z-50  text-white ' style={{ backgroundImage: `url(${Background})` }}>
      <div  data-aos="fade-up" data-aos-delay="150" className="container mx-auto flex flex-col md:flex-row h-full">

        {/* Kolom kanan: Teks */}
        <div className="flex flex-col p-10  w-full md:w-1/2">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-4  border-b-2">{characterData.name}</h1>
          <h1 className="text-xl sm:text-2xl font-bold mb-4  ">{characterData.subtitle}</h1>
          <p className="text-sm sm:text-lg leading-relaxed font-orbitron mt-5">{characterData.description}</p>

          <div className='text-3xl mt-10'>
              <Typewriter
              words={characterData.quotes}
              loop={false} // tampilkan sekali
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={20}
              delaySpeed={500} // jangan delay reset
            />
          </div>
          
         
          <div>
            <h1 className=" text-lg font-bold mt-8  border-b-2">The Androids</h1>
          </div>

        <div className='flex mt-5 gap-8 flex-wrap'>
            {characterData.androidIcons.map((icon, index) => (
              <div key={index} className='items-center flex flex-col'>
                <img className='w-[50px] sm:w-[100px]' src={icon.src} alt={icon.label} />
                <p>{icon.label}</p>
              </div>
            ))}
          </div>

        </div>

                {/* Kolom kiri: Canvas karakter */}
        <div className="flex-col flex justify-center items-center w-full md:w-1/2">
          <div className="w-full md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] border-white border-2">
            <Canvas camera={{ position: [0, 0, 3], fov: 70 }}>
              <>
                {!isMobile && <OrbitControls target={[0, 0, 0]} />}
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={2} />
                <pointLight position={[0, 10, 10]} intensity={2} />
                <group position={[0, -0.8, 0]}>
                    <Mod2b  />
                </group>
              </>
            </Canvas>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Banner2
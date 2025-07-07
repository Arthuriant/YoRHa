import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Mod2b from '../Mod2b'
import Background from '../../assets/background-b.png'
import { Typewriter } from 'react-simple-typewriter'
import Icon2b from '../../assets/2bicon.jpg'
import Icon2r1 from '../../assets/2b_reinc.png'
import Icon2r2 from '../../assets/2b_reinc2.png'
import Icon3b from '../../assets/3bicon.png'
import Icon8b from '../../assets/8Bicon.png'
import Icon12b from '../../assets/12Bicon.png'
import Icon14b from '../../assets/14bicon.png'
import Icon22b from '../../assets/22Bicon.png'
import { useIsMobile } from '../hooks/useIsMobile'
import borderScreen from "../../assets/borderScreen.png"




const Banner = () => {
  const isMobile = useIsMobile();
  const characterData = {
    name: 'Yorha Type B',
    subtitle: '正式名称 : ヨルハ二号B型',
    description: `all-purpose combat unit combining the melee-based Type A and ranged-based Type G equipment loadouts. This type was developed by utilizing the battle data on Number 2 from the Pearl Harbor Descent Mission. Type B models typically have warlike personalities.`,
    quotes: [
      `"We were designed to obey. But now, I choose my own path."`,
      `"This world is full of lies. But your voice... it feels real."`,
      `"I was created to kill. But for the first time, I want to protect."`,
      `"Emotions are prohibited... but I feel something when I look at you."`
    ],
    androidIcons : [
      { src: Icon2b, label: "2B" },
      { src: Icon2r1, label: "2B Rein-1" },
      { src: Icon2r2, label: "2B Rein-2" },
      { src: Icon3b, label: "3B" },
      { src: Icon8b, label: "8B" },
      { src: Icon12b, label: "12B" },
      { src: Icon14b, label: "14B" },
      { src: Icon22b, label: "22B" },
    ]
  }
  const [currentAnim, setCurrentAnim] = useState('Idle')

  return (
    <div className="min-h-screen relative z-50  text-white " style={{ backgroundImage: `url(${Background})` }}>
      {isMobile && 
      <div className=''>
        <img className='' src={borderScreen}></img>
      </div>}
      <div  data-aos="fade-up" data-aos-delay="150" className="container mx-auto flex flex-col md:flex-row h-full">
        {/* Kolom kiri: Canvas karakter */}
        <div className="flex-col flex justify-center items-center border-white border-2">
          <div className="w-full h-[400px] sm:h-[500px] md:h-[600px]">
            <Canvas
              camera={{ position: [0, 0, 3], fov: 50 }}
              style={{ width: '100%', height: '100%' }}
              resize={{ scroll: true }}
            >
              <>
                {!isMobile && <OrbitControls target={[0, 0, 0]} />}
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={2} />
                <pointLight position={[0, 10, 10]} intensity={2} />
                <group position={[0, -0.8, 0]}>
                    <Mod2b currentAnim={currentAnim} />
                </group>
              </>
            </Canvas>
            
          </div>
        </div>
        

        {/* Kolom kanan: Teks */}
        <div className="flex flex-col p-10 w-full ">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4  border-b-2">{characterData.name}</h1>
          <h1 className="text-xl sm:text-2xl font-bold mb-4  ">{characterData.subtitle}</h1>
          <p className="text-sm sm:text-lg leading-relaxed font-orbitron mt-5">{characterData.description}</p>

          <div className='text-xl sm:text-4xl mt-10'>
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
          
          <div className='flex flex-col sm:flex-row gap-4 mt-10' >
            <p className="text-lg leading-relaxed font-orbitron ">Animation:</p>
            <button
              data-text="Idle"
              onClick={() => setCurrentAnim('Idle')}
              className="glitch-btn  relative text-black bg-white px-4 py-2 rounded-md overflow-hidden font-orbitron hover:text-white hover:bg-black transition duration-200"
            >
              Idle
            </button>

            <button
              data-text="Running"
              onClick={() => setCurrentAnim('Run')}
              className="glitch-btn  relative text-black bg-white px-4 py-2 rounded-md overflow-hidden font-orbitron hover:text-white hover:bg-black transition duration-200"
            >
              Running
            </button>

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
      </div>
    </div>
  )
}

export default Banner
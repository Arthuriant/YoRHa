import React from 'react'
import { FaShieldAlt, FaRobot } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import OperatorVid from "../../assets/Operator.mp4"
import { Typewriter } from 'react-simple-typewriter'
import Background from "../../assets/background.png"

{/* Data */}
const operatorText = `Hi there, 2B! Oh—uh, I mean… all android units currently active in the field! Welcome to YoRHa Command! We're the elite android force created by humans to reclaim Earth from those pesky machine lifeforms. I know, super cool, right? After humanity was forced to the Moon—so sad!—they entrusted us androids to take back their planet. That’s where you come in! Every mission you do, every machine you take down, brings us one step closer to victory! Our goal? Destroy all enemy machines and restore Earth for the glory of mankind! (Also, I saw a cute squirrel in a database scan this morning—nature is amazing!!)Anyway! Good luck out there. And remember: glory to mankind! `

const ServiceData = [
  {
    title: "Protect the World",
    content: "[YoRHa Infantry]",
    description:
      "An elite YoRHa combat unit tasked with safeguarding Earth from machine threats. They operate with strict discipline and unwavering loyalty to humanity.",
    icon: <FaRobot className="text-4xl sm:text-7xl text-white" />,
    aosDelay: "300",
  },
  {
    title: "Hunting the Aliens",
    content: "[Scanner Intelligence]",
    description:
      "S-type reconnaissance forces assigned to gather data, infiltrate enemy systems, and uncover the truth behind the long war between humans and machines.",
    icon: <FaEye className="text-4xl sm:text-7xl text-white" />, 
    aosDelay: "300",
  },
  {
    title: "Resurrect the Future",
    content: "[Legacy Reclaimers]",
    description:
      "A covert unit striving to revive humanity's hope through the discovery of ancient technology and the restoration of forgotten history. For the future once promised.",
    icon: <FaWrench className="text-4xl sm:text-7xl text-white" />,    
    aosDelay: "300",
  },
];


const Services = () => {
  return (
  <div className='overflow-x-hidden'> 
    <div
    className="text-white relative z-50 min-h-screen bg-cover bg-center flex"
    style={{ backgroundImage: `url(${Background})` }}
    >

        <div className="container mx-auto">
            <div className='mb-5'>
              {/* Services */}
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 mt-15'>
                    {
                        ServiceData.map((data) => (
                            <div data-aos="fade-up" data-aos-delay={data.aosDelay} className=' flex flex-col gap-2 justify-center items-center  rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-[300px] sm:w-full lg:w-p[300px] mx-auto'
                            style={{ backgroundColor: '#2F2F2F' }}>
                                {data.icon}
                                <h1>{data.title}</h1>
                                <p className='text-lg'>{data.content}</p>
                                <p className='text-sm'>{data.description}</p>
                            </div>
                        )
                        )
                    }
                </div>
          </div>

          {/* Operator Text */}
          <div data-aos="fade-up" data-aos-delay="300" className='flex flex-col md:flex-row gap-4 bg-[#2F2F2F]/80 text-white p-4 '>
            <div className='p-4'>
              <video autoPlay loop muted className=' object-cover  h-96/2  sm:h-96   z-10 border-4 border-white '>
                <source src={OperatorVid} type="video/mp4"  />
              </video>
            </div>
            <div className='p-4 w-full md:w-1/2 font-orbitron text-sm sm:text-lg  mt-5' >
              <div>
                <Typewriter
                  words={[operatorText]}
                  loop={1} 
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={0}
                  delaySpeed={Infinity} 
                />

                <br/>
                <br/>
                <br/>

                <h1>[Transmission End]</h1>
                <h1>— with love, Operator 6O 💌</h1>
              </div>
                
            </div>
          </div>

        </div>

        
    </div>
  </div>
    
  )
}

export default Services
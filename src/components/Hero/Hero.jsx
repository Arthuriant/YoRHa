import React from 'react'
import bgVideo from '../../assets/YorhaLogo.webm'

const Hero = () => {
  return (
    <div className='bg-black/20 h-full text-white relative z-50'>
        <div className="h-full flex justify-center items-center p-4">
            {/* Description */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='space-y-4 lg:pr-36'>
                    <h1 data-aos = "fade-up" className='text-5xl font-bold uppercase'>Glory to Mankind</h1>
                    <p data-aos = "fade-up" data-aos-delay="300">
                        We fight, not for ourselves,but for a dream we may never touch, <br/> 
                        We fall, yet rise again,bearing the weight of a legacy long lost. <br/> 
                        For in the silence of space and the ashes of Earth, <br/> 
                        To honor those who came before us. <br/> 
                        To reclaim a future denied. <br/> 
                        To bring glory to mankind. 
                    </p>
                    <button data-aos = "fade-up" data-aos-delay="500" className='bg-black/10 backdrop-blur-sm text-white hover:bg-orange-300 px-4 py-2 rounded-md duration-200'>Learn More</button>
                </div>

                {/* Logo */}
                <div className='hidden lg:block'>
                    <video autoPlay loop muted className="w-170 h-170 object-cover rounded-full absolute right-0 bottom-0 mr-50  z-10">
                        <source src={bgVideo} type="video/webm"  />
                    </video>
                </div>

            </div>
        </div>
        <div className='absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]'></div>
    </div>
  )
}

export default Hero
import React, {useState} from 'react'
import bgVideo from "./assets/background.mp4"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Footer from './components/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from "./components/Modal/Modal"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import YorhaLogo from "./assets/YorhaLogo.png"
import axios from "axios"


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        email,
        password,
      });

      localStorage.setItem('token', res.data.token);
      alert("Login success!");
      closeModal(); // tutup modal
      // redirect pakai navigate atau window.location.href = '/dashboard'
    } catch (err) {
      setMsg(err.response?.data?.message || 'Login failed');
    }
  };

  React.useInsertionEffect(() =>{
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  })
  return (
    <div>
      <div className='h-[700px] relative overflow-hidden'>
        <video autoPlay loop muted className='fixed right-0 top-0 h-[700px] w-full object-cover z-10 inset-0'>
          <source src={bgVideo} type='video/mp4'/>
        </video>
        <Navbar openModal={openModal}/>
        <Hero/>
      </div>
      
      {/* Services Card ection*/}
      <section id='Services'>
        <Services/>
      </section>
      <section id='TypeA'>
        <Banner2/>
      </section>
      <section id='TypeB'>
        <Banner/>
      </section>
      <Footer/>

      <Modal isOpen={isModalOpen} onClose={closeModal }>
        <div className='flex items-center justify-center'>
          <img src={YorhaLogo} className='h-40'></img>
        </div>
        <h2 className="font-orbitron text-white flex items-center justify-center text-4xl font-semibold mb-4">Login</h2>
        <form className="space-y-4 text-white" onSubmit={(e) => e.preventDefault()}>
          <div className='mt-10'>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your email'
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your Password'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute inset-y-0 right-3 flex items-center text-sm text-gray-50 hover:text-gray-200'
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          {msg && <p className='text-red-400 text-sm mt-2'>{msg}</p>}
          <p className='text-sm text-gray-300'>Don't have an account? Register now!</p>
        </form>

        <button
          onClick={handleLogin }
          className="w-full mt-20 bg-gray-50 hover:bg-gray-200  text-black font-bold py-2 px-4 rounded"
        >
          Login Account
        </button>
      </Modal>
    </div>
  )
}

export default App
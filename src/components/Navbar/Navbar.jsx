import React, { useState, useEffect, useRef } from 'react';
import YorhaLogo from '../../assets/YorhaLogo.png';
import { FaPlay, FaMusic, FaHeadphones, FaPlayCircle } from 'react-icons/fa';
import music from '../../assets/Music.wav';
import Modal from '../Modal/Modal';
import { jwtDecode } from 'jwt-decode';

const Navbar = ({ openModal }) => {
    const Music = useRef(new Audio(music));
    const [isPlaying, setIsPlaying] = useState(false);
    const [userEmail, setUserEmail] = useState(null);

    const toggleMusic = () => {
        if (isPlaying) {
            Music.current.pause();
        } else {
            Music.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                const fullEmail = decoded.email;
                const username = fullEmail.split('@')[0];
                setUserEmail(username);
            } catch (err) {
                console.error({ err });
            }
        }

        const audio = Music.current;
        audio.loop = true;

        return () => {
            audio.pause();
        };
    }, []);

    return (
        <div
            data-aos="fade-down"
            className="fixed top-0 right-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-5 sm:py-4"
        >
            <div className="container mx-auto max-w-screen-xl px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-4 text-white font-bold text-2xl">
                        <img src={YorhaLogo} className="h-15 w-15" alt="" />
                        <span>YoRHa</span>
                    </div>

                    {/* Nav Links */}
                    <div className="text-white hidden md:block">
                        <ul className="flex items-center gap-4 sm:gap-6 text-xl py-4 sm:py-0">
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#Services">Service</a>
                            </li>
                            <li>
                                <a href="#TypeA">Type-A</a>
                            </li>
                            <li>
                                <a href="#TypeB">Type-B</a>
                            </li>
                        </ul>
                    </div>

                    {/* Music + Login */}
                    <div className="flex items-center gap-4 shrink-0">
                        <button onClick={toggleMusic}>
                            <FaMusic
                                className={`sm:text-3xl text-2xl transition duration-300 ${
                                    isPlaying
                                        ? 'text-white hover:text-gray-400'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            />
                        </button>
                        {userEmail ? (
                            <span className="text-white text-xl px-3 py-1 rounded-md">
                                {userEmail}
                            </span>
                        ) : (
                            <button
                                className="text-white border-2 border-white px-3 py-1 rounded-md"
                                onClick={openModal}
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

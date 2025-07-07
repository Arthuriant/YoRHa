import React from 'react'
import { FaInstagram, FaLinkedin , FaFacebook} from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import Logo from '../../assets/NierAutomataLogo.png'

const Footer = () => {
  return (
    <div className='bg-black text-white px-5 relative z-20'>
        <section className='max-w-[1200px] mx-auto text-white'>
                
                {/* Logo */}
                <div className='flex justify-center items-center h-28'>
                    <img className="h-64" src={Logo} alt=''></img>
                </div>

                {/* Copyright */}
                <div className='text-xs text-center mt-5'>
                    <p className=''>NieR:Automata / ニーア オートマタ プラットフォーム:PlayStation®4 / Steam® ダウンロード販売のみ） ジャンル : アクションRPG プレイ人数 1人 発売日 : 2017年2月23日 (木)-PS4 / 2017年3月18日(土)-Steam®  希望小売価格 : 8,580 (税込) CERO : D (17才以上対象) 開発会社：プラチナゲームズ株式会社</p>
                    <br></br>
                    <p className='mt-10'>© 2017 SQUARE ENIX CO., LTD. All Rights Reserved.</p>
                </div>

                {/* Creator */}
                <div className='hidden sm:block w-full '>
                    <div className='flex justify-between items-center py-6 border-t-2 border-gray-400'>
                        <span className='text-sm text-gray-400'>Fan Made / Portfolio Only</span>
                        <div className='flex items-center justify-center gap-4 pb-4'>
                            
                        </div>
                        <span className='text-sm text-gray-400'>
                            <ul className='flex gap-3'>
                                <li>@Arthuriant</li>
                            </ul>
                        </span>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Footer
import React from 'react'
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from '../Assests/arrow.png'
import hero_img from '../Assests/hero_image.png'
import './Hero.css'
export const Hero = () => {
    return (
        <div className="Hero-container flex flex-row">
            <div className="Hero-Left flex flex-1 flex-col justify-center gap-16 pl-24">
                <h2 className='text-black text-3xl font-medium'>New Arrival only</h2>
                <div className='flex items-center gap-4'>
                    <p className='text-black text-8xl font-semibold'>new</p>
                    <img src={hand_icon} className='w-24 mt-7'alt=''></img>
                </div>
                <p className='text-6xl font-bold'>Collection</p>
                <p className='text-6xl font-bold'>For everyone</p>
            <div className="hero-latest-btn flex flex-row justify-center items-center gap-2 w-75 h-16 border rounded-full mt-6 p-9 bg-red-500 text-white text-2xl font-medium cursor-pointer">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
            </div>
            <div className="Hero-Right">
                <img src={hero_img}></img>
            </div>
        </div>
    )
}

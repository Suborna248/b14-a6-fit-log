import Image from 'next/image';
import React from 'react';
import bannerImg from '../assets/banner.png'

const Banner = () => {
    return (
        <div className='container mx-auto my-12 bg-[#1e1e1e] py-8 px-12 rounded h-110'>
            <div className='flex items-center justify-between '>
                <div className='space-y-8'>
                    <span className='text-[#c2f800]' >WORKOUT LIBRARY</span>
                    <div className='max-w-3xl py-5 space-y-4'>
                        <h2 className="uppercase text-[#ffffff] text-6xl font-bold">Train with intent.log every set.</h2>
                    <p className='text-[#9ca3af]' >FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    <br />into today's plan, and watch the week's work add up.</p>
                    </div>
                    <button className=' text-xs font-bold uppercase bg-[#c2f800] py-3 px-8 rounded' >Browse Workouts</button>
                </div>
                <div>
                    <Image src={bannerImg} alt="banner"></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;
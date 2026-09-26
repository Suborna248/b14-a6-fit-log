import Image from 'next/image';
import React from 'react';
import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
         <div  className='container mx-auto my-6 sm:my-8 lg:my-12'>
          <div  className="bg-[#1e1e1e] rounded-lg px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                <div className=' w-full lg:w-1/2 space-y-5 sm:space-y-6 lg:space-y-8'>
                    <span className='text-[#c2f800]' >WORKOUT LIBRARY</span>
                    <div className='max-w-3xl py-5 space-y-4'>
                        <h2 className="uppercase text-[#ffffff] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Train with intent.log every set.</h2>
                    <p className='text-[#9ca3af]' >FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    <br />into todays plan, and watch the weeks work add up.</p>
                    </div>
                    <button className="text-xs sm:text-sm font-bold uppercase bg-[#c2f800] text-black py-3 px-6 sm:px-8 rounded hover:bg-[#d4ff3f] transition">Browse Workouts</button>
                </div>
                <div>
                    <Image src={bannerImg} alt="banner"></Image>
                </div>
            </div>
        </div>

    
  </div>
    );
};

export default Banner;
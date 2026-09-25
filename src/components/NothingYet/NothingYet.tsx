import Link from 'next/link';
import React from 'react';

const NothingYet = () => {
    return (
        <div className='bg-[#1e1e1e] h-56 my-12'>
           <div className='text-center py-14 space-y-3'> 
             <h2 className='text-xl font-bold text-white'>NOTHING HERE YET</h2>
            <p className='text-[#a1a1aa] text-xs font-normal'>Browse the library and add a lift to get today moving.</p>
            <Link href="/">
             <button className='bg-[#c2f10d] py-2 px-8 rounded-3xl'>Go to worksouts</button>
            </Link>
           </div>
        </div>
    );
};

export default NothingYet;
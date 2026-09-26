import React from 'react';
import NotFoundImg from '../assets/not-found.png';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className='container mx-auto my-58'>
           <div className='flex justify-center'>
             <Image className='w-150 h-80 rounded-xl' src={NotFoundImg} alt="Not" width={400} height={300}></Image>

            
           </div>
           <Link href="/" className='flex justify-center my-8'>
             <button className='btn bg-black rounded-2xl text-white' >Back to WorkOuts</button>
            </Link>
            
        </div>
    );
};

export default NotFoundPage;
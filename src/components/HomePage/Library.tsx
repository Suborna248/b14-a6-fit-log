import { WorksOutType } from '@/types/WorksOutType';
import React from 'react'; 
import WorksOutCards from '../shared/WorksOutCards';

const getWorksOut = async ()=>{
    const res = await fetch('http://localhost:3000/worksoutdata.json');
    const data = await res.json();
    return data;
}

const Library = async() => {
    const worksOuts = await getWorksOut();
    return (
        <div className='container mx-auto my-4 sm:my-7 lg:my-30 '>
            <div className='space-y-2 ml-0 sm:ml-0 lg:ml-5'>
                <h2 className='text-3xl font-bold uppercase'>The Library</h2>
            <p className='text-sm font-normal text-[#9ca3af]'>Twelve lifts covering every major muscle group.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   my-10 gap-8'>
                {
                    worksOuts.map((worksOut:WorksOutType)=><WorksOutCards worksOut={worksOut} key={worksOut.name}></WorksOutCards>)

                }
            </div>
        </div>
    );
};

export default Library;
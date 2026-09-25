import { WorksOutType } from '@/types/WorksOutType';
import Image from 'next/image';
import React from 'react';
import { FaFireAlt, FaRegStar } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';

const MyPlanCard = ({plan}:{plan:WorksOutType}) => {
    console.log(plan)

    return (
        <div className='bg-[#13161d] rounded-xl shadow-2xl'>

            <div className='flex gap-4  '>
                {/* Image */}
                <div>
                    <Image  className=' h-40  w-55 py-5 px-5 rounded-3xl' src={plan.image} alt={plan.image} width={170} height={100}></Image>
                </div>


                <div className='py-6 space-y-1'>
                    <h2 className='uppercase text text-lg font-bold text-[#ffffff]'>{plan.name}</h2>
                    <p className='text-xs text-[rgb(138,146,160)]'>{plan.equipment}</p>

                    <div className='flex items-center gap-8 py-5'>
                        <div className='flex gap-2'>
                        <MdAccessTime className='text-[#ccff00]' />
                         <span className='text-xs text-[#d1d5db] font-normal'>{plan.duration}min</span>
                        </div>

                       <div className='flex gap-2'>
                         <FaFireAlt  className='text-[#ccff00]'/>
                        <span className='text-xs text-[#d1d5db] font-normal'>{plan.caloriesBurned}kcal</span>
                       </div>
                         
                       <div className='flex gap-2'>
                          <FaRegStar className='text-[#ccff00]' />
                        <span className='text-xs text-[#d1d5db] font-normal'>{plan.rating}</span>
                       </div>

                    </div>

                </div>





            </div>
            

            
        </div>
    );
};

export default MyPlanCard;
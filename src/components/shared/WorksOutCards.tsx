import { WorksOutType } from '@/types/WorksOutType';
import Image from 'next/image';
import React from 'react';
import { FaFire, FaStar } from 'react-icons/fa';
import { MdAccessTimeFilled } from 'react-icons/md';

interface WorksOutCardsProp{
    worksOut:WorksOutType
}

const WorksOutCards = ({worksOut}:WorksOutCardsProp) => {

    return (
        <div className='container mx-auto  '>
            <div className="card bg-[#20242e] h-120  shadow-sm">
    <figure>
    <Image
      src={worksOut.image}
      alt="Shoes"
      width={550}
      height={500}
       />
  </figure>
  <div className="card-body">s
    <h2 className="card-title">
      <div className='flex gap-4'>
        {
            worksOut.muscleGroups.map((muscle)=><span className="badge bg-[#c2f800] uppercase" key={muscle}>{muscle}</span>)
        }
      </div>
     
    </h2>
    <h2 className='uppercase text-white text-lg font-bold'>{worksOut.name}</h2>
    <p className='text-xs font-normal text-[#9ca3af]'>{worksOut.equipment}</p>
       <div className="divider divider-success"></div>
    <div className="card-actions flex text-white gap-6 ">
      <div className="badge badge-outline">
        <MdAccessTimeFilled />
        <span>{worksOut.duration}</span>


      </div>
      <div className="badge badge-outline">
        <FaFire />
        <span>{worksOut.caloriesBurned}cal</span>
      </div>
      <div className="badge badge-outline">
        <FaStar />
        <span>{worksOut.rating}
            </span>
            </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default WorksOutCards;
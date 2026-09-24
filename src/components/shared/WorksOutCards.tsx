import { WorksOutType } from '@/types/WorksOutType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFire, FaStar } from 'react-icons/fa';
import { MdAccessTimeFilled } from 'react-icons/md';

interface WorksOutCardsProp {
  worksOut: WorksOutType;
}

const WorksOutCards = ({ worksOut }: WorksOutCardsProp) => {
  return (
    <div className="container mx-auto ">
      <Link href={`/worksout/${worksOut.id}`}>
        <div className="card bg-[#20242e] h-120 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer ">

   
          <figure>
            <Image
              src={worksOut.image}
              alt={worksOut.name}
              width={550}
              height={500}
              className="  "
            />
          </figure>

          <div className="card-body h-70 pb-8">

            <div className="flex gap-4 flex-wrap">
              {worksOut.muscleGroups.map((muscle) => (
                <span
                  className="badge bg-[#c2f800] text-black uppercase font-medium"
                  key={muscle}
                >
                  {muscle}
                </span>
              ))}
            </div>
            <h2 className="uppercase text-white text-lg font-bold mt-2">
              {worksOut.name}
            </h2>

            <p className="text-xs font-normal text-[#9ca3af]">
              {worksOut.equipment}
            </p>

         

            <div className="card-actions flex text-white  gap-5 flex-wrap">
              <div className="badge badge-outline gap-1">
                <MdAccessTimeFilled />
                <span>{worksOut.duration}</span>
              </div>
              <div className="badge badge-outline gap-1">
                <FaFire />
                <span>{worksOut.caloriesBurned} cal</span>
              </div>
              <div className="badge badge-outline gap-1">
                <FaStar />
                <span>{worksOut.rating}</span>
              </div>

            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorksOutCards;
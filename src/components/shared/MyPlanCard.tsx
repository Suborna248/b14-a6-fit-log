

import { WorkOutContext } from '@/Context/WorkOutContext';
import { WorksOutType } from '@/types/WorksOutType';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FaCheck, FaFireAlt, FaRegStar } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { RiDeleteBack2Fill } from 'react-icons/ri';

interface ContextStateProp {
  handleRemovePlan: (id: number) => void;
  handleMarkAsDone: (id: number) => void;
}

const MyPlanCard = ({plan}:{plan:WorksOutType}) => {
    const {handleRemovePlan,handleMarkAsDone} =useContext(WorkOutContext) as ContextStateProp;

    return (
        <div className="w-full bg-[#13161d] rounded-xl shadow-2xl p-4 sm:p-5">
  <div className="flex sm:flex-col lg:flex-row lg:items-center  lg:justify-between  gap-8 lg:gap-140">

    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full">

      <div className="w-full sm:w-auto flex justify-center sm:justify-start">
        <Image
          className="w-full h-48 sm:w-40 sm:h-40 lg:w-44 lg:h-40 object-cover rounded-2xl"
          src={plan.image}
          alt={plan.name}
          width={170}
          height={160}
        />
      </div>
      <div className="flex-1 py-2 sm:py-4">
        <h2 className="uppercase text-lg sm:text-xl font-bold text-white">
          {plan.name}
        </h2>

        <p className="text-xs sm:text-sm text-[#8a92a0] mt-1">
          {plan.equipment}
        </p>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6  mt-5">

          <div className="flex items-center gap-2">
            <MdAccessTime className="text-[#ccff00] text-lg" />
            <span className="text-xs sm:text-sm text-[#d1d5db]">
              {plan.duration} min
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaFireAlt className="text-[#ccff00] text-lg" />
            <span className="text-xs sm:text-sm text-[#d1d5db]">
              {plan.caloriesBurned} kcal
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaRegStar className="text-[#ccff00] text-lg" />
            <span className="text-xs sm:text-sm text-[#d1d5db]">
              {plan.rating}
            </span>
          </div>

        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row lg:flex-row   gap-5  w-full ">

      <Link href={`/worksout/${plan.id}`} className="w-full sm:w-auto">
        <button className="btn btn-neutral border-amber-50 rounded-full w-full sm:w-auto">
          View Details
        </button>
      </Link>

      <button
        onClick={() => handleMarkAsDone(plan.id)}
        className="btn bg-[#ccff00] text-[#1e1e1e] border-none rounded-full w-full sm:w-auto hover:bg-[#b8eb00]"
      >
        <FaCheck />
        Mark as Done
      </button>

      <button
        onClick={() => handleRemovePlan(plan.id)}
        className="flex items-center justify-center p-2 rounded-full hover:bg-[#20242e]"
        aria-label="Remove workout"
      >
        <RiDeleteBack2Fill className="text-red-500 text-3xl" />
      </button>

    </div>

  </div>
</div>
    );
};

export default MyPlanCard;
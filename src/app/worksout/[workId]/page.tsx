import AddPlanButton from '@/components/WorksOutDetails/AddPlanButton';
import SaveLaterButton from '@/components/WorksOutDetails/SaveLaterButton';
import { WorksOutType } from '@/types/WorksOutType';
import Image from 'next/image';
import React from 'react';


interface WorkOutDetailsPageProp{
    params:Promise<{
        workId:string
    }>
}

const getWorksOut =async (workId: string): Promise<WorksOutType[]>=>{
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${workId}`);
    const data = await res.json();
    return data;
}

const WorkOutDetailsPage = async({params}:WorkOutDetailsPageProp) => {

    const {workId} = await params;
    const worksOuts = await getWorksOut(workId);
    const worksOut = worksOuts.find((workOut : WorksOutType) => workOut.id === parseInt(workId)) as WorksOutType;
   
    return (
        <div className='container mx-auto my-16 '>
            <div className="card lg:card-side bg-[#171a21] rounded-4xl shadow-2xl max-w-[1500px]">
  <figure>
    <Image
    className='w-140 h-full rounded-3xl shadow-2xl '
      src={worksOut.image}
      alt="Album"
      width={500}
      height={500}
       />
  </figure>
  <div className=" py-8 px-12 space-y-4">
    <h2 className="card-title text-white uppercase text-3xl font-bold">{worksOut.name}</h2>
    <p className='text-sm  text-[#9ca3af] max-w-md'>{worksOut.description}</p>
     <div className="flex gap-2 flex-wrap">
              {worksOut.muscleGroups.map((muscle) => (
                <span
                  className="badge bg-[#c2f800] text-black uppercase font-medium"
                  key={muscle}
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className='bg-[#e5e7eb]/10 py-8 px-8 space-y-3 sm:w-120 md:w-170 lg:w-200 h-84 rounded-xl'>
                <div className='flex justify-between items-center '>
                    <h2 className='text-xs font-bold uppercase text-[#9ca3af]'>Equipment</h2>
                    <p className='text-[#e5e7eb] text-sm font-medium'>{worksOut.equipment}</p>
                </div>
                <div className="w-full h-px bg-[#9ca3af] my-3"></div>
                <div className='flex justify-between'>
                    <h2 className='text-xs font-bold uppercase text-[#9ca3af]'>Difficulty</h2>
                    <p className='text-[#e5e7eb] text-sm font-medium'>{worksOut.difficulty}</p>
                </div>
                <div className="w-full h-px bg-[#9ca3af] my-3"></div>
                <div className='flex justify-between'>
                    <h2 className='text-xs font-bold uppercase text-[#9ca3af]' >Sets</h2>
                    <p className='text-[#e5e7eb] text-sm font-medium'>{worksOut.sets}</p>
                </div>
                <div className="w-full h-px bg-[#9ca3af] my-3"></div>
                <div className='flex justify-between'>
                   <h2 className='text-xs font-bold uppercase text-[#9ca3af]'>Reps</h2>
                    <p className='text-[#e5e7eb] text-sm font-medium'>{worksOut.reps}</p>
                </div>
                <div className="w-full h-px bg-[#9ca3af] my-3"></div>
                <div className='flex justify-between'>
                    <h2 className='text-xs font-bold uppercase text-[#9ca3af]'>Duration</h2>
                    <p className='text-[#e5e7eb] text-sm font-medium'>{worksOut.duration} min</p>
                </div>
                <div className="w-full h-px bg-[#9ca3af] my-3"></div>
                <div className='flex justify-between'>
                    <h2 className='text-xs font-bold uppercase text-[#9ca3af]'>calories</h2>
                    <p className='text-[#e5e7eb] text-sm font-medium'>{worksOut.caloriesBurned} kcal</p>
                </div>
                <div className="w-full h-px  bg-[#9ca3af] my-3"></div>
                <div className='flex justify-between '>
                    <h2 className='text-xs font-bold uppercase text-[#9ca3af]'>rating</h2>
                    <p className='text-[#e5e7eb] text-sm font-medium'>{worksOut.rating}</p>
                </div>


            </div>

            <div className='mt-5'>
                <h2 className='text-white font-extrabold text-lg'>Instruction</h2>
                 <div className="mt-4 flex flex-col gap-3">
                  {
                  worksOut.instructions.map((instruction, index) => (
                   <div key={index} className="flex items-start gap-2">
                   <span className="text-[#9ca3af] text-sm shrink-0">{index + 1}. </span>
                     <p className="text-[#d1d5db] text-sm ">{instruction}</p>
                   </div>
                  ))}
              </div>


            </div>
    <div className="card-actions my-10 gap-8 ">
      <AddPlanButton worksOut={worksOut}></AddPlanButton>
      <SaveLaterButton worksOut={worksOut}></SaveLaterButton>
    </div>
  </div>
</div>
        </div>
    );
};

export default WorkOutDetailsPage ;
import { WorksOutType } from '@/types/WorksOutType';
import Image from 'next/image';
import React from 'react';

interface WorkOutDetailsPageProp{
    params:Promise<{
        workId:string
    }>
}

const getWorksOut = async ()=>{
    const res = await fetch('http://localhost:3000/worksoutdata.json');
    const data = await res.json();
    return data;
}

const WorkOutDetailsPage = async({params}:WorkOutDetailsPageProp) => {

    const {workId} = await params;
    const worksOuts = await getWorksOut();
    const worksOut = worksOuts.find((workOut : WorksOutType) => workOut.id === parseInt(workId)) as WorksOutType;
    console.log(worksOut);
    return (
        <div className='container mx-auto my-16'>
            <div className="card lg:card-side bg-[#171a21] rounded-4xl shadow-2xl max-w-[1500px]">
  <figure>
    <Image
    className='w-140 h-160 rounded-4xl shadow-2xl'
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

            <div className='bg-[#e5e7eb]/10 py-8 px-8 space-y-4 w-200 h-74 rounded-xl'>
                <div className='flex justify-between items-center '>
                    <h2 className='text-xs font-bold uppercase text-[#9ca3af]'>Equipment</h2>
                    <p className='text-[#e5e7eb] text-sm font-medium'>{worksOut.equipment}</p>
                </div>
                <div className='flex justify-between'>
                    <h2 className='text-xs font-bold uppercase text-[#9ca3af]'>Difficulty</h2>
                    <p className='text-[#e5e7eb] text-sm font-medium'>{worksOut.difficulty}</p>
                </div>
                <div className='flex justify-between'>
                    <h2 className='text-xs font-bold uppercase text-[#9ca3af]' >Sets</h2>
                    <p className='text-[#e5e7eb] text-sm font-medium'>{worksOut.sets}</p>
                </div>
                <div className='flex justify-between'>
                   <h2 className='text-xs font-bold uppercase text-[#9ca3af]'>Reps</h2>
                    <p className='text-[#e5e7eb] text-sm font-medium'>{worksOut.reps}</p>
                </div>
                <div className='flex justify-between'>
                    <h2 className='text-xs font-bold uppercase text-[#9ca3af]'>Duration</h2>
                    <p className='text-[#e5e7eb] text-sm font-medium'>{worksOut.duration} min</p>
                </div>
                <div className='flex justify-between'>
                    <h2 className='text-xs font-bold uppercase text-[#9ca3af]'>calories</h2>
                    <p className='text-[#e5e7eb] text-sm font-medium'>{worksOut.caloriesBurned} kcal</p>
                </div>
                <div className='flex justify-between'>
                    <h2 className='text-xs font-bold uppercase text-[#9ca3af]'>rating</h2>
                    <p className='text-[#e5e7eb] text-sm font-medium'>{worksOut.rating}</p>
                </div>


            </div>

            <div className='mt-5'>
                <h2 className='text-white'>Instruction</h2>


            </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default WorkOutDetailsPage ;
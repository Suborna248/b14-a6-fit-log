'use client'

import NothingYet from '@/components/NothingYet/NothingYet';
import MyPlanCard from '@/components/shared/MyPlanCard';
import MySavedCard from '@/components/shared/MySavedCard';
import { WorkOutContext } from '@/Context/WorkOutContext';
import { WorksOutType } from '@/types/WorksOutType';
import { useContext, useEffect, useState } from 'react';
import Loading from '../loading';


interface ContextStateProp{
  addPlan:WorksOutType[]
  savelater:WorksOutType[]

}
const MyPlanPage = () => {
    const {addPlan,savelater}=useContext(WorkOutContext)as ContextStateProp ;
    const [activeTab, setactiveTab]=useState<"plan" | "saved">("plan");
    const [sortBy,setSortBy]=useState<"duration"| "caloriesBurned" | "rating">("duration"); 
    const [loading, setLoading]=useState<boolean>(true);

    useEffect(() => {
         const timer = setTimeout(() => 
            { setLoading(false); }, 800); 
         return () => clearTimeout(timer); 
        }, []);

    const sortWorkOuts =((worksOut : WorksOutType[])=>{
        const sortedWorkOuts = [...worksOut]; 

        if(sortBy === "duration"){
            sortedWorkOuts.sort((a,b)=> b.duration - a.duration);
        }else if(sortBy === "caloriesBurned" ){
            sortedWorkOuts.sort((a,b) => b.caloriesBurned- a.caloriesBurned)


        }
        else if(sortBy === "rating"){
             sortedWorkOuts.sort((a,b)=> b.rating - a.rating);

        }return sortedWorkOuts;

    })

    const sortedAddPlan = sortWorkOuts(addPlan);
    const sortedSaveLater = sortWorkOuts(savelater);
   
     const currentAddPlans =activeTab === "plan" ? addPlan : savelater;

     const totalMin = currentAddPlans.reduce((total,workout:WorksOutType)=> {
             return total + Number(workout.duration || 0)
     },0);


     const totalCalorie = currentAddPlans.reduce((total,workout:WorksOutType)=> {
             return total + Number(workout.caloriesBurned || 0)
     },0)
    
    return (
        <div className='container mx-auto'> 
            <div className='my-12 space-y-2'>
                <h2 className='text-[#1e1e1e] text-3xl font-bold'>My Plan</h2>
                <p className='text-[#8a92a0] text-sm font-normal'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className='flex  bg-[#232732]  w-150 sm:w-200  lg:w-full gap-24 sm:gap-44  lg:gap-86 py-8   px-14'>
           
                <div>
                    <p className='text-[#8a92a0] text-xs'>Exercises</p>
                    <h2 className="text-4xl font-bold  text-[#ccff00]">{currentAddPlans.length}</h2>
                </div>
                <div>
                    <p  className='text-[#8a92a0] text-xs' >Minutes</p>
                    <h2 className="text-4xl font-bold  text-[#ffffff]">{totalMin}</h2>
                </div>
                <div>
                    <p  className='text-[#8a92a0] text-xs'>Calories</p>
                    <h2 className="text-4xl font-bold  text-[#ffffff]">{totalCalorie}</h2>
                </div>

            </div>

           <div className="my-14">
 
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    
   
    <div className="tabs tabs-box">
      <input
        type="radio"
        name="my_tabs_6"
        className="tab"
        aria-label="Today's Plan"
        checked={activeTab === "plan"}
        onChange={() => setactiveTab("plan")}
      />

      <input
        type="radio"
        name="my_tabs_6"
        className="tab"
        aria-label="Saved"
        checked={activeTab === "saved"}
        onChange={() => setactiveTab("saved")}
      />
    </div>

   
    <div className=''> 
  
      <select
       className="select select-[white] "
        value={sortBy}
        onChange={(e)=>setSortBy(e.target.value  as "duration"| "caloriesBurned" | "rating")}

        
      >
        <option disabled>Sort By</option>
        <option value="duration">Duration</option>
        <option value="caloriesBurned">Calories</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  </div>

 
  <div className="mt-6">

          {loading ? (
           <Loading></Loading>
          ) : (
            <>
           
              {activeTab === "plan" && (
                <div className="space-y-6">

                  {sortedAddPlan.length > 0 ? (
                    sortedAddPlan.map((plan) => (
                      <MyPlanCard
                        key={plan.id}
                        plan={plan}
                      />
                    ))
                  ) : (
                    <NothingYet />
                  )}

                </div>
              )}

             
              {activeTab === "saved" && (
                <div className="space-y-6">

                  {sortedSaveLater.length > 0 ? (
                    sortedSaveLater.map((saved) => (
                      <MySavedCard
                        key={saved.id}
                        saved={saved}
                      />
                    ))
                  ) : (
                    <NothingYet />
                  )}

                </div>
              )}
            </>
          )}

  
  </div>
</div>

           
           
            
        </div>
    );
};

export default MyPlanPage;





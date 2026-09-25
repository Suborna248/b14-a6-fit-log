'use client'

import NothingYet from '@/components/NothingYet/NothingYet';
import MyPlanCard from '@/components/shared/MyPlanCard';
import MySavedCard from '@/components/shared/MySavedCard';
import { WorkOutContext } from '@/Context/WorkOutContext';
import { WorksOutType } from '@/types/WorksOutType';
import React, { useContext } from 'react';

interface ContextStateProp{
  addPlan:WorksOutType[]
  savelater:WorksOutType[]

}
const MyPlanPage = () => {
    const {addPlan,savelater}=useContext(WorkOutContext)as ContextStateProp 

    console.log(addPlan);
    
    return (
        <div className='container mx-auto'> 
            <div className='my-12 space-y-2'>
                <h2 className='text-[#1e1e1e] text-3xl font-bold'>My Plan</h2>
                <p className='text-[#8a92a0] text-sm font-normal'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className='flex  bg-[#232732]/30 gap-56 py-8  justify-center'>
                <div>
                    <p>Exercises</p>
                    <h2>{}</h2>
                </div>
                <div>
                    <p>Minutes</p>
                    <h2></h2>
                </div>
                <div>
                    <p>Calories</p>
                    <h2></h2>
                </div>

            </div>

            <div className="tabs tabs-box my-14">
            <input type="radio" name="my_tabs_6" className="tab" aria-label="Today's Plan" defaultChecked />
           <div className="tab-content bg-base-100 border-base-300 p-6">

             <div className='space-y-6'>

                {
                    addPlan.length>0 ? (
                    addPlan.map((plan:WorksOutType)=><MyPlanCard plan={plan} key={plan.id}></MyPlanCard>)
                ) : (<NothingYet></NothingYet>)
                }

                
            </div>
           </div>

           <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved" />
            <div className="tab-content bg-base-100 border-base-300 p-6">  <div className='space-y-6'>

                {
                   savelater.length>0 ? (
                    savelater.map((saved:WorksOutType)=><MySavedCard saved={saved} key={saved.id}></MySavedCard >)
                ) : (<NothingYet></NothingYet>)
                }

                
            </div></div>

  
           </div>

           
           
            
        </div>
    );
};

export default MyPlanPage;
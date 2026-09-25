'use client'

import { WorkOutContext } from '@/Context/WorkOutContext';
import { WorksOutType } from '@/types/WorksOutType';
import React, { useContext } from 'react';

interface ContextStateProp{
  addPlan:WorksOutType[]
//   savelater:WorksOutType[]

}
const MyPlanPage = () => {
    const {addPlan}=useContext(WorkOutContext)as ContextStateProp 

    console.log(addPlan);
    
    return (
        <div>
           
            
        </div>
    );
};

export default MyPlanPage;
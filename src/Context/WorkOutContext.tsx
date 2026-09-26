'use client'


import { WorksOutType } from '@/types/WorksOutType';

import React, { createContext,  ReactNode, useState } from 'react';
import { toast } from 'react-toastify';

export const WorkOutContext = createContext({});




const WorkOutProvider = ({children}:{children:ReactNode}) => {
    const [addPlan ,setAddPlan]=useState<WorksOutType[]>([]);
    const [savelater, setSaveLater]=useState<WorksOutType[]>([]);
    

 



     const handleRemovePlan =(id:number):void=>{
        const resPlan = addPlan.filter((plan:WorksOutType)=> plan.id !== id) ;
        setAddPlan(resPlan);
        toast.error(`WorksOut  Todays Plan Remove`);
        
    }
    const handleMarkAsDone = (id: number): void => {
     setAddPlan((mark) => mark.filter((workout: WorksOutType) => workout.id !== id)
  );

  toast.success("Workout completed!");
};

    const handleRemoveSave =(id:number):void=>{
        const resSaved = savelater.filter((savelat:WorksOutType)=> savelat.id !== id) ;
        setSaveLater(resSaved);
         toast.error(`WorksOut  Saved  Remove`);
        
    }

    const InfoData ={
        addPlan ,
        setAddPlan,
        savelater,
        setSaveLater,
        handleRemoveSave,
        handleRemovePlan ,
        handleMarkAsDone,

}


    return (
        <WorkOutContext.Provider  value={InfoData}>{children}</WorkOutContext.Provider>
    )
};

export default WorkOutProvider;
'use client'


import { WorksOutType } from '@/types/WorksOutType';
import React, { createContext,  ReactNode, useState } from 'react';

export const WorkOutContext = createContext({});




const WorkOutProvider = ({children}:{children:ReactNode}) => {
    const [addPlan ,setAddPlan]=useState([]);
    const [savelater, setSaveLater]=useState([]);

    const InfoData ={
        addPlan ,
        setAddPlan,
        savelater,
        setSaveLater

}


    return (
        <WorkOutContext.Provider  value={InfoData}>{children}</WorkOutContext.Provider>
    )
};

export default WorkOutProvider;
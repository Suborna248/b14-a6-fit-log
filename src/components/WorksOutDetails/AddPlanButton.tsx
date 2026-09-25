'use client'

import { WorkOutContext } from '@/Context/WorkOutContext';
import { WorksOutType } from '@/types/WorksOutType';
import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface AddPlanButtonProp{
    worksOut:WorksOutType
   ;

} 

interface WorkOutContextType {
  addPlan: WorksOutType[];
  setAddPlan: React.Dispatch<React.SetStateAction<WorksOutType[]>>;


}



const AddPlanButton = ({worksOut}:AddPlanButtonProp) => {

    const {addPlan,setAddPlan}= useContext(WorkOutContext) as WorkOutContextType;

    const alreadyAdded =addPlan.some((works:WorksOutType)=> works.id === worksOut.id) ;

    const handleAddPlan = ()=>{
       
        
        setAddPlan([...addPlan,worksOut]);
        toast.success(`WorksOut added to ${worksOut.name} today's plan!`);

       
      

    }
    return (
        <div>
            <button  onClick={handleAddPlan} disabled={alreadyAdded} className="btn bg-[#ccff00]"  >
            <FaPlus />
           {
           alreadyAdded ? "Alreadyadded " : "Add to today's plan"
           }
           </button>
        </div>
    );
};

export default AddPlanButton;
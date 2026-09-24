'use client'

import { WorkOutContext } from '@/Context/WorkOutContext';
import { WorksOutType } from '@/types/WorksOutType';
import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface AddPlanButtonProp{
    worksOut:WorksOutType

}



const AddPlanButton = ({worksOut}:AddPlanButtonProp) => {

    const {addPlan,setAddPlan} = useContext(WorkOutContext);

    const alreadyAdded =addPlan.some((works:WorksOutType)=> works.id === worksOut.id) ;

    const handleAddPlan = ()=>{
       
        if(!alreadyAdded){
        setAddPlan([...addPlan,worksOut]);
        toast.success(`WorksOut added to ${worksOut.name} today's plan!`);

        }
      

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
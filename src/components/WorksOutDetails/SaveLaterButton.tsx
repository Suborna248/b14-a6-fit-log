"use client"
import { WorkOutContext } from '@/Context/WorkOutContext';
import { WorksOutType } from '@/types/WorksOutType';
import React, { useContext } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface WorkOutContextType {
  savelater: WorksOutType[];
  setSaveLater: React.Dispatch<React.SetStateAction<WorksOutType[]>>;

 
}
const SaveLaterButton = ({worksOut}:{worksOut:WorksOutType}) => {
    const {savelater,setSaveLater}=useContext( WorkOutContext) as WorkOutContextType;

    const alreadySaved=savelater.some((saved:WorksOutType)=> saved.id === worksOut.id)

    const handleSaveLater = ()=>{

             setSaveLater([...savelater,worksOut]);
             toast.success(`WorksOut saved for later ${worksOut.name}`);

       

       

    }
    return (
        <div>
           <button className={`btn flex gap-3 ${alreadySaved ? "bg-gray-700 text-gray-500": 
                "bg-[#374151] text-[#e5e7eb] hover:bg-[#4b5563]"}`}onClick={handleSaveLater}disabled={alreadySaved}>
             <FaBookmark />
  {alreadySaved ? "Saved for later" : "Save for later"}
   </button>
        </div>
    );
};

export default SaveLaterButton;
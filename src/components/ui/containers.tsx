import React from "react";

interface ContainersProps{
    children:React.ReactNode
}

const Containers: React.FC<ContainersProps>=({children})=>{
    return(
        <div className="flex flex-col h-[50vh] w-full items-center justify-center rounded-2xl p-20 bg-[#E8E0DD]">
            {children}
        </div>
    )
}
export  default Containers
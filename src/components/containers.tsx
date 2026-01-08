import React from "react";

interface ContainersProps{
    children:React.ReactNode
}

const Containers: React.FC<ContainersProps>=({children})=>{
    return(
        <div className="h-[40vh] w-full flex flex-col items-center justify-center p-20 bg-[#E8E0DD]">
            {children}
        </div>
    )
}
export  default Containers
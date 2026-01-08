
interface ContainersProps{
    children:React.ReactNode
}

const Containers: React.FC<ContainersProps>=({children})=>{
    return(
        <div>
            {children}
        </div>
    )
}
export  default Containers
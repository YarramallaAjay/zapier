import { Children, ReactNode } from "react"

interface sizevariants{

}
type buttonProps=()=>{

}
const LinkButton=({children,onClick}:{
    children:ReactNode,onClick:()=>void
})=>{
    return(
    <div className={"flex justify-center px-2 py-2 hover:bg-slate-100 cursor-pointer font-light text-sm rounded"} onClick={onClick} >
        {children}
    </div>
    )
}

export default LinkButton;
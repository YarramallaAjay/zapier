import { ReactNode } from "react"

const PrimaryButton=({children,onClick,size='small'}:
    {
        children:ReactNode,
        onClick?:() => void,
        size?:'big' | 'small',
    }
)=>{
    return(
        <div>
            <button className={`${size==='small'?'text-sm px-8 py-2' :'text-xl px-10 py-4'} hover:shadow-md text-white bg-amber-700 cursor-pointer rounded-full text=center flex justify-center flex-col`} onClick={onClick}>{children}</button>
        </div>
    )
}

export default PrimaryButton;
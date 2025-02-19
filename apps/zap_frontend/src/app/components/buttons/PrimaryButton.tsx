import { ReactNode } from "react"

const PrimaryButton=({children,onClick,size='sm'}:
    {
        children:ReactNode,
        onClick?:() => void,
        size?:'sm' | 'md' | 'lg',
    }
)=>{
    return(
        <div>
            <button className={`${size==='sm'?'text-sm px-8 py-2' :'text-xl px-10 py-4'} hover:shadow-md text-white bg-amber-700 cursor-pointer rounded-full text=center flex justify-center flex-col`}>Primary Button</button>
        </div>
    )
}

export default PrimaryButton;
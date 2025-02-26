import { useRouter } from "next/navigation";
import LinkButton from "./buttons/LinkButton";
import PrimaryButton from "./buttons/PrimaryButton";

const AppBar = () => {
    const router=useRouter()
    return (
        <div className="flex border-b p-4 justify-between">
            <div className="flex flex-col justify-center font-extrabold text-2xl ">
                Zapier
            </div>
            <div className="flex">
         
                <div className="pr-4">
                    <LinkButton onClick={()=>{}}>ContactSales</LinkButton>
                </div>
                <div className="pr-4">
                    <LinkButton onClick={()=>{
                        router.push("/login")
                    }}>Login</LinkButton>
                </div>
                <div>
                    <PrimaryButton onClick={()=>{
                        router.push("/signup")
                    }}>Sign Up</PrimaryButton>
                </div>
            </div>

        </div>
           
    );
};

export default AppBar;
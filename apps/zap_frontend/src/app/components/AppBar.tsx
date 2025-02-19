import LinkButton from "./buttons/LinkButton";
import PrimaryButton from "./buttons/PrimaryButton";

const AppBar = () => {
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
                    <LinkButton onClick={()=>{}}>Login</LinkButton>
                </div>
                <div>
                    <PrimaryButton onClick={()=>{}}>Login</PrimaryButton>
                </div>
            </div>

        </div>
           
    );
};

export default AppBar;
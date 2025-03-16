"use client";
import  Appbar  from "../components/AppBar";
import { CheckFeature } from "../components/CheckFeature";
import { Input } from "../components/Input";
import  PrimaryButton  from "../components/buttons/PrimaryButton";
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";


const handleLogin=async(props:any)=>{
    
    const {email,password,router}=props
    const res=await axios.post(`${BACKEND_URL}/user/signin`,{
        email:email,
        password:password
    }).then((res)=>{
        document.cookie = `token=${res.data.token}`
        console.log(document.cookie)
        if(document.cookie){
            router.push("/dashboard")
        }
        else{
            alert("Cookie not set!")
        }
        console.log(res.data)
    }).catch((err)=>{
        console.log(err)
        alert("Invalid email or password")
    })
}
export default function() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    
    return <div> 
        <Appbar />
        <div className="flex justify-center">
            <div className="flex pt-8 max-w-4xl">
                <div className="flex-1 pt-20 px-4">
                    <div className="font-semibold text-3xl pb-4">
                    Join millions worldwide who automate their work using Zapier.
                    </div>
                    <div className="pb-6 pt-4">
                        <CheckFeature label={"Easy setup, no coding required"} />
                    </div>
                    <div className="pb-6">
                        <CheckFeature label={"Free forever for core features"} />
                    </div>
                    <CheckFeature label={"14-day trial of premium features & apps"} />

                </div>
                <div className="flex-1 pt-6 pb-6 mt-12 px-4 border rounded">
                    <Input onChange={e => {
                        setEmail(e.target.value)
                    }} label={"Email"} type="text" placeholder="Your Email"></Input>
                    <Input onChange={e => {
                        setPassword(e.target.value);
                    }} label={"Password"} type="password" placeholder="Password"></Input>
                    <div className="pt-4">
                        <PrimaryButton onClick={()=>handleLogin({email,password,router})} size="big">Login</PrimaryButton>
                    </div>
                    <div>
                        <PrimaryButton onClick={()=>{
                            router.push(`${BACKEND_URL}/auth/google`)
                        }}>
                            Login in Google
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
"use client"
import Appbar from "../components/AppBar";
import  {DarkButton}  from "../components/buttons/DarkButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL, HOOKS_URL } from "../config";
import  LinkButton  from "../components/buttons/LinkButton";
import { useRouter } from "next/navigation";
import { api } from "../page";
import { Zap } from "../types/zaps";



function useZaps() {
    const [loading, setLoading] = useState(true);
    const [zaps, setZaps] = useState<Zap[]>([]);

    useEffect(() => {
        api.get(`/zaps`)
            .then(res => {
                setZaps(res.data.zaps);
                setLoading(false)
                console.log("in then")
            }).catch(err => {
                console.log("in catch")
                console.log(err)
            })
    }, []);

    return {
        loading, zaps
    }
}

export default  function() {
    setTimeout( () => {
       
    }, 1000);
    const { loading, zaps } = useZaps();
    const router = useRouter();
    console.log(zaps)
    
    return <div>
        <Appbar />
        <div className="flex justify-center pt-8">
            <div className="max-w-screen-lg	 w-full">
                <div className="flex justify-between pr-8 ">
                    <div className="text-2xl font-bold">
                        My Zaps
                    </div>
                    <DarkButton onClick={() => {
                        router.push("/zap/create");
                    }}>Create</DarkButton>
                </div>
            </div>
        </div>
        {!zaps? <div className="flex flex-col justify center items-center">Zaps not found...create one!</div>:<div>zaps found</div>}
        {loading ? "Loading..." : <div className="flex justify-center"> <ZapTable zaps={zaps} /> </div>}
    </div>
}

function ZapTable({ zaps }: {zaps: Zap[]}) {
    const router = useRouter();
    if(!zaps) return <div>Zaps are empty....</div>

    return <div className="p-8 max-w-screen-lg w-full">
        <div className="flex">
                <div className="flex-1">Name</div>
                <div className="flex-1">ID</div>
                <div className="flex-1">Created at</div>
                <div className="flex-1">Webhook URL</div>
                <div className="flex-1">Go</div>
        </div>

        {zaps.map(z => <div className="flex border-b border-t py-4">
            <div className="flex-1 flex"><img src={z.trigger.type.image} className="w-[30px] h-[30px]" /> {z.actions.map(x => <img src={x.type.image} className="w-[30px] h-[30px]" />)}</div>
            <div className="flex-1">{z.id}</div>
            <div className="flex-1">Nov 13, 2023</div>
            <div className="flex-1">{`${HOOKS_URL}/hooks/catch/${z.userId}/${z.id}`}</div>
            <div className="flex-1"><LinkButton onClick={() => {
                    router.push("/zap/" + z.id)
                }}>Go</LinkButton></div>
        </div>)}
    </div>
}
import { Field, FieldType } from "./Fields";
import { Prisma } from "../../../generated/prisma";

export interface TriggerBase {
    id: string;
    teamId:String;
    name: string;
    description: string;
    url: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    headers: Record<string, string>;
    metadata: {};
    body: string;
    inputConfig?:Field<FieldType>[]
    outputConfig?: Field<FieldType>[]
   
    
    createTrigger(appId:string,trigger:any,tx?:Prisma.TransactionClient):Promise<any>
    deleteTrigger(trigger:any,tx?:Prisma.TransactionClient):Promise<any>
    updateTrigger(appId:any,fields:any,tx?:Prisma.TransactionClient):Promise<any>
    getTriggers(appId:any,tx?:Prisma.TransactionClient):Promise<any>
    getTriggerById(triggerId:any,tx?:Prisma.TransactionClient):Promise<any>


}








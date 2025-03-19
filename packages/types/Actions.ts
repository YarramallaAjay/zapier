import { Prisma } from "@prisma/client";
import { Field, FieldType } from "./Fields";

export interface ActionBase{
    id:string;
    name:string;
    email: string;
    teamId:string;
    type:string,
    timestamp: number,
    inputConfig:Field<FieldType>[]
    createAction(appId:any,actions:any,tx?:Prisma.TransactionClient):void
    deleteAction(action:any,tx?:Prisma.TransactionClient):void
    updateAction(appId:any,actions:Partial<ActionBase>[],tx?:Prisma.TransactionClient):void
    getActions(appId:any,tx?:Prisma.TransactionClient):void
    getActionById(actionId:any,tx?:Prisma.TransactionClient):void
}




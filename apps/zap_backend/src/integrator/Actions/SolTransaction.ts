import { Prisma, PrismaClient } from "@prisma/client";
import { ActionBase } from "@repo/types/Actions";
import { Field, FieldType } from "@repo/types/src/Fields";
import { resolve } from "bun";

export class SolTransaction implements ActionBase{
    id!: string;
    name!: string;
    email!: string;
    teamId!: string;
    type!: string;
    timestamp!: number;
    inputConfig: Field<FieldType>[];
    client:PrismaClient
    constructor(){
        this.client=new PrismaClient()
        this.inputConfig=[{name: "to",type: "string",value: "",required: true,description:"Receptient wallet address "},
                        {name: "from",type: "string",value: "",required: true,description:"Sender wallet address "}]  
    }
    async createAction(appId: number, action: any, tx?: Prisma.TransactionClient) {
        const db = tx || this.client;
        try {
            await db.availableActions.create({
                data: {
                    appId: appId,
                    name: action.name,
                    description: action.description,
                    configMetadata: action.config,
                    type: action.type
                }
            });
            console.log("[Action created]");
        } catch (error) {
            console.error("Error creating action:", error);
        }
    }

    async deleteAction(actionId: string, tx?: Prisma.TransactionClient) {
        const db = tx || this.client;
        try {
            await db.availableActions.delete({
                where: { id: actionId }
            });
            console.log("[Action deleted]");
        } catch (error) {
            console.error("Error deleting action:", error);
        }
    }

    async updateAction(actionId: string, fields: Partial<ActionBase>[], tx?: Prisma.TransactionClient) {
        const db = tx || this.client;
        try {
            fields.forEach(async(f)=>{
                await db.availableActions.update({
                    where: { id: actionId },
                    data:f
                })

            })
            
            console.log("[Action updated]");
        } catch (error) {
            console.error("Error updating action:", error);
        }
    }

    async getActions(appId: number, tx?: Prisma.TransactionClient) {
        const db = tx || this.client;
        try {
            const actions = await db.availableActions.findMany({
                where: { appId: appId }
            });
            console.log(actions.length ? "[Retrieved actions]" : "[No actions found]");
            return actions;
        } catch (error) {
            console.error("Error retrieving actions:", error);
        }
    }

    async getActionById(actionId: any, tx?: Prisma.TransactionClient) {
        const db = tx || this.client;
        try {
            const action = await db.availableActions.findFirst({
                where: { id: actionId as unknown as string}
            });
            console.log(action ? "[Retrieved action]" : "[No action found]");
            return action;
        } catch (error) {
            console.error("Error retrieving action:", error);
        }
    }

    
}
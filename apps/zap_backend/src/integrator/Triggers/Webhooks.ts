import { Prisma, PrismaClient } from "@prisma/client";
import { Field, FieldType } from "@repo/types/Fields";
import { TriggerBase } from "@repo/types/Trigger";
import { resolve } from "bun";
export class WebHook implements TriggerBase{
    id!: string;
    teamId!: String;
    name!: string;
    description!: string;
    url!: string;
    method!: "GET" | "POST" | "PUT" | "DELETE";
    headers!: Record<string, string>;
    metadata!: {};
    body!: string;
    client:PrismaClient
    
   

    constructor(){
        this.client=new PrismaClient();
    }
    inputConfig?: Field<FieldType>[] | undefined;
    outputConfig?: Field<FieldType>[] | undefined;
    async createTrigger (appId: number, trigger: any, tx?: Prisma.TransactionClient) {
        const db=tx ||this.client;
        try{
            await db.availableTriggers.create({
                data:{
                    appId:appId,
                    name:trigger.name,
                    description:trigger.description,
                    configMetadata:trigger.config,
                    type:trigger.type
                }
            })

            console.log("[trigger created]")

        }
        catch(e){
            console.log(e)
        }
        

        
        
    };


    async deleteTrigger (trigger:any, tx?:Prisma.TransactionClient) {
        const db=tx || this.client;
        try{
            await db.availableTriggers.delete({
                where:{
                    id:trigger.id
                    }
                })
                console.log("[trigger deleted]")
            }
            catch(e){
                console.log(e)
            }
        };


        async updateTrigger(appId: number, fields: Partial<TriggerBase>, tx?: Prisma.TransactionClient) {
            const db = tx || this.client;
        
            try {
                // Find the existing trigger
                const existingTrigger = await db.availableTriggers.findFirst({
                    where: { appId: appId }
                });
        
                if (!existingTrigger) {
                    console.warn(` No trigger found for App ID: ${appId}`);
                    return;
                }
        
                // Update the trigger with provided fields
                await db.availableTriggers.update({
                    where: { id: existingTrigger.id },
                    data: fields
                });
        
                console.log(` Trigger updated successfully for App ID: ${appId}`);
            } catch (error) {
                console.error(` Error updating trigger for App ID: ${appId}`, error);
                throw error; // Rethrow for better error handling
            }
        }
        



    async getTriggers (appId:any,tx?: Prisma.TransactionClient) {
        const db=tx ||this.client;
        try{
            const triggers=await db.availableTriggers.findMany({
                where:{
                    appId: appId
                }
            })

            triggers?console.log("[retrieved triggers]"):console.log("[no triggers found]");    

            return triggers;


        }catch(e){
            console.log(e)
        }

    };



    async getTriggerById (triggerId: any, tx?: Prisma.TransactionClient) {
        const db=tx ||this.client;
        try{
            const triggers=await db.availableTriggers.findFirst({
                where:{
                    id: triggerId
                }
            })

            triggers?console.log("[retrieved triggers]"):console.log("[no triggers found]");    

            return triggers;


        }catch(e){
            console.log(e)
        }
    };


    
}
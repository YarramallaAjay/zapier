import { Prisma, PrismaClient } from "../../../../generated/prisma";
import { Field, FieldType } from "@repo/types/src/Fields";
import { TriggerBase } from "@repo/types/src/Trigger";
import {Status} from "@repo/types/src/Status"
export class WebHook implements TriggerBase{
    id!: string;
    teamId!: string;
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
    async createTrigger (appId: string, trigger: any, tx?: Prisma.TransactionClient): Promise<any> {
        const db = tx || this.client;
        try {
            const _new=await db.availableTriggers.create({
                data: {
                    appId: appId,
                    name: trigger.name,
                    description: trigger.description,
                    configMetadata: trigger.config,
                    type: trigger.type
                }
            });

            console.log("[trigger created]");
            return JSON.stringify({
                message:"Trigger Created Successfully",
                data:{
                    id:_new.id
                },
                error:{},
                status:Status.SUCCESS}); // Return a any to match the expected type
        } catch (e) {
            console.log(e);

            return JSON.stringify({
                message:"Error Occured",
                data:{},
                error:e,
                status:Status.FAILED
            }) // Return a fallback any in case of an error
        }
    };


    async deleteTrigger (trigger:any, tx?:Prisma.TransactionClient):Promise<any> {
        const db=tx || this.client;
        try{
            await db.availableTriggers.delete({
                where:{
                    id:trigger.id
                    }
                })
                console.log("[trigger deleted]")
                return JSON.stringify({
                    message:"Trigger Deleted",
                    data:"",
                    error:{},
                    status:Status.SUCCESS
                })
            }
            catch(e){
                console.log(e)

                return JSON.stringify({
                    message:"Error Occured",
                    data:{},
                    error:e,
                    status:Status.FAILED})
            }
        };


        async updateTrigger(appId: string, fields: Partial<TriggerBase>, tx?: Prisma.TransactionClient):Promise<any> {
            const db = tx || this.client;
        
            try {
                // Find the existing trigger
                const existingTrigger = await db.availableTriggers.findFirst({
                    where: { appId: appId }
                });
        
                if (!existingTrigger) {
                    console.warn();
                    return JSON.stringify({
                        message:` No trigger found for App ID: ${appId}`,
                        data:{},
                        error:{},
                        status:Status.PROCESSED_NOT_SUCCESSFUL
                    });
                }
        
                // Update the trigger with provided fields
                const _updated=await db.availableTriggers.update({
                    where: { id: existingTrigger.id },
                    data: fields
                });
        
                console.log(` Trigger updated successfully for App ID: ${appId}`);
                return JSON.stringify({
                    message:`Trigger updated successfully for App ID: ${appId}`,
                    data:_updated,
                    error:{},
                    status:Status.SUCCESS
                });
            } catch (error) {
                console.error(` Error updating trigger for App ID: ${appId}`, error);
                return JSON.stringify({
                    message:`Error updating trigger for App ID: ${appId}`,
                    data:{},
                    error:error,
                    status:Status.FAILED
                });
                throw error; // Rethrow for better error handling
            }
        }
        



    async getTriggers (appId:any,tx?: Prisma.TransactionClient):Promise<any> {
        const db=tx ||this.client;
        try{
            const triggers=await db.availableTriggers.findMany({
                where:{
                    appId: appId
                }
            })

           if(!triggers){
            return JSON.stringify({
                message:`No trigger Found with the App ID: ${appId}`,
                data:{},
                error:{},
                status:Status.PROCESSED_NOT_SUCCESSFUL
            })
           }
            return JSON.stringify({
                message:`Triggers Fetched Successfully`,
                data:triggers,
                error:{},
                status:Status.SUCCESS
            });

        }catch(e){
            console.log(e)
            return JSON.stringify({
                message:"Error Ocurred",
                data:"",
                error:e,
                status:Status.FAILED
            })
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

            if(!triggers){
                return JSON.stringify({
                    message:`NO trigger found by the triggerId: ${triggerId}`,
                    data:{},
                    error:{},
                    status:Status.PROCESSED_NOT_SUCCESSFUL
                })
            }

            return JSON.stringify({

            message:"Triggers fetched successfully",
            data:triggers,
            error:{},
            status:Status.SUCCESS
        })


        }catch(e){
            console.log(e)
            return JSON.stringify({
                message:"Error Occured",
                data:{},
                error:e,
                status:Status.FAILED
            })
        }
    };


    
}
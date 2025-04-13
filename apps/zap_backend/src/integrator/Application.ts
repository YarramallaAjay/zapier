import { PrismaClient } from "@prisma/client";
import { AuthFactory } from "./authStrategies/authFactory";
import { TriggerFactory } from "./Triggers/TriggerFactory";
import { ActionFactory } from "./Actions/ActionFactory";
import { AuthenticationBase } from "@repo/types/dist/Authentication";
import { TriggerBase } from "@repo/types/dist/Trigger";
import { ActionBase } from "@repo/types/dist/Actions";
import { z } from "zod";
import { Status } from "@repo/types/dist/Status";
import { stringify } from "uuid";

// export type ApplicationType =z.object( {
//     name: z.string();
//     teamId: z.string();
//     AppAuth: z.string[];
//     AppTriggers: string[];
//     AppActions: Partial<ActionBase>[];
//     description: string;
// });


//TODO:Unfinished Class.
export abstract class Application {
    authentication!: AuthenticationBase;
    triggers!: TriggerBase;
    actions!: ActionBase;
    client: PrismaClient;


    constructor(appData: {
        name: string;
        description: string;
        teamId: string;
    }) {
        this.client = new PrismaClient();
        this.createApplication(appData);
       
    }

    async createApplication(appData:{name:string,description:string,teamId:string}) {
        return this.client.$transaction(async (tx) => {
            try {
                const app = await tx.app.create({
                    data: {
                        name: appData.name,
                        description: appData.description,
                        teamId: appData.teamId
                    }
                });
                
                console.log("Application Created:", app);
                return app;
            } catch (error) {
                console.error("Error creating application:", error);
                throw error;
            }
        });
    }

    async updateApplication(appId: string, updateData: any) {
        return this.client.$transaction(async (tx) => {
            try {
                if (updateData.AppAuth) {
                    this.authentication.updateAuth(appId,updateData.AppAuth);
                }
                if (updateData.AppTriggers) {
                    this.triggers.updateTrigger(appId,updateData.AppTriggers,tx);
                }
                if (updateData.AppActions) {
                    this.actions.updateAction(appId,updateData.AppActions,tx);
                }

                const updatedApp = await tx.app.update({
                    where: { id: appId },
                    data: updateData
                });
                console.log("Application Updated:", updatedApp);
                return updatedApp;
            } catch (error) {
                console.error("Error updating application:", error);
                throw error;
            }
        });
    }

    async deleteApplication(appId: string) {
        return this.client.$transaction(async (tx) => {
            try {
                await tx.app.delete({ where: { id: appId } });
                console.log("Application deleted successfully.");
            } catch (error) {
                console.error("Error deleting application:", error);
                throw error;
            }
        });
    }

    async registerApplication(data: any) {
        return this.client.$transaction(async (tx) => {
            try {
                const app=await tx.app.upsert({
                    where:{
                        id:data.id
                    },
                    update:{

                    },
                    create:{
                        name:data.name,
                            description:data.description,
                            teamId:data.teamId,

                    }
                })
                console.log(`[Retrieved app at registering function]: ${app}`)
                this.authentication=new AuthFactory().createInstance(data.auth.provider);
                this.triggers=new TriggerFactory().createInstance(data.triggers.type)
                this.actions=new ActionFactory().createInstance(data.actions.type)

               const auth=await this.authentication.createAuth(data.id,data,this.client)

                const trigger=await this.triggers.createTrigger(app.id,data.triggers,tx);
                
                const action=await this.actions.createAction(app.id,data.actions,tx)

                if(JSON.parse(action).status!=Status.SUCCESS || JSON.parse(trigger).status!=Status.SUCCESS || JSON.parse(auth).status!=Status.SUCCESS){
                    return JSON.stringify({
                        message:"Something Went Wrong",
                        data:{},
                        error:{
                            auth:auth,
                            trigger:trigger,
                            action:action
                        },
                        status:Status.PROCESSED_NOT_SUCCESSFUL
                    })

                }

                console.log("Application registered successfully.");
                return app;
            } catch (error) {
                console.error("Error registering application:", error);
                throw error;
            }
        });
    }

    async addTrigger(appId: string, data: any) {
         
            try {
                await this.triggers.createTrigger(appId,data);
                console.log(`Trigger '${data.type}' added successfully.`);
            } catch (error) {
                console.error("Error adding trigger:", error);
                throw error;
            }
      
    }

    async addAction(appId: string, data: any) {
        return this.client.$transaction(async (tx) => {
            try {
               
                await this.actions.createAction(appId,data)

                console.log(`Action '${data.type}' added successfully.`);
            } catch (error) {
                console.error("Error adding action:", error);
                throw error;
            }
        });
    }

    async listApplications(teamId: string) {
        try {
            const apps = await this.client.app.findMany({
                where: { teamId },
                include: { authMethods: true, triggers: true, actions: true }
            });

            console.log("Applications found:", apps);
            return apps;
        } catch (error) {
            console.error("Error fetching applications:", error);
            throw error;
        }
    }
}

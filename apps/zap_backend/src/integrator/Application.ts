import { PrismaClient } from "@prisma/client";
import { AuthFactory } from "./authStrategies/authFactory";
import { TriggerFactory } from "./Triggers/TriggerFactory";
import { ActionFactory } from "./Actions/ActionFactory";
import { AuthenticationBase } from "@repo/types/Authentication";
import { TriggerBase } from "@repo/types/Trigger";
import { ActionBase } from "@repo/types/Actions";

export type ApplicationType = {
    name: string;
    teamId: number;
    AppAuth: string[];
    AppTriggers: string[];
    AppActions: Partial<ActionBase>[];
    description: string;
};

export abstract class Application {
    authentication: AuthenticationBase;
    triggers: TriggerBase;
    actions: ActionBase;
    client: PrismaClient;

    constructor(auth: string, trigger: string, action: string) {
        this.client = new PrismaClient();
        this.authentication = new AuthFactory().createInstance(auth);
        this.triggers = new TriggerFactory().createInstance(trigger);
        this.actions = new ActionFactory().createInstance(action);
    }

    async createApplication(appData: Pick<ApplicationType, 'name' | 'teamId' | 'description'>) {
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

    async updateApplication(appId: number, updateData: Partial<ApplicationType>) {
        return this.client.$transaction(async (tx) => {
            try {
                if (updateData.AppAuth) {
                    this.authentication.updateAuth(updateData.AppAuth);
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

    async deleteApplication(appId: number) {
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
                const app = await tx.app.findFirstOrThrow({ where: { id: data.appId } });
                const availableAuth = await tx.availableAuthMethods.findFirstOrThrow({ where: { provider: data.auth.provider } });

                await tx.authMethods.create({
                    data: {
                        appId: app.id,
                        authId: availableAuth.id,
                        metadata: JSON.parse(data.auth.config)
                    }
                });
                
                await this.triggers.createTrigger(app.id,data.triggers,tx);
                
                await this.actions.createAction(app.id,data.actions,tx)

                console.log("Application registered successfully.");
                return app;
            } catch (error) {
                console.error("Error registering application:", error);
                throw error;
            }
        });
    }

    async addTrigger(appId: number, data: any) {
         
            try {
                await this.triggers.createTrigger(appId,data);
                console.log(`Trigger '${data.type}' added successfully.`);
            } catch (error) {
                console.error("Error adding trigger:", error);
                throw error;
            }
      
    }

    async addAction(appId: number, data: any) {
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

    async listApplications(teamId: number) {
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

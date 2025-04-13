import { Prisma, PrismaClient } from "@prisma/client";
import { ActionBase } from "@repo/types/src/Actions";
import { Field, FieldType } from "@repo/types/src/Fields";
import { Status } from "@repo/types/src/Status";

export class Email implements ActionBase {
    id!: string;
    name!: string;
    email!: string;
    teamId!: string;
    type!: string;
    timestamp!: number;
    inputConfig: Field<FieldType>[];
    client: PrismaClient;

    constructor() {
        this.client = new PrismaClient();
        this.inputConfig = [
            { name: "to", type: "string", required: true, value: "", defaultValue: "jondoe@gmail.com", description: "Email address" },
            { name: "from", type: "string", required: true, value: "", defaultValue: "jondoe@gmail.com", description: "Email address" },
            { name: "subject", type: "string", required: true, value: "", defaultValue: "", description: "Email subject" },
            { name: "body", type: "string", required: true, value: "", defaultValue: "", description: "" },
            { name: "cc", type: "string", required: false, value: "", defaultValue: "", description: "Email address" },
            { name: "bcc", type: "string", required: false, value: "", defaultValue: "", description: "" }
        ];
    }

    async createAction(appId: string, action: any, tx?: Prisma.TransactionClient) {
        const db = tx || this.client;
        try {
            const created = await db.availableActions.create({
                data: {
                    appId: appId,
                    name: action.name,
                    description: action.description,
                    configMetadata: action.config,
                    type: action.type
                }
            });

            console.log("[Action created]");
            return JSON.stringify({
                message: "Action created successfully",
                data: { id: created.id },
                error: {},
                status: Status.SUCCESS
            });
        } catch (error) {
            console.error("Error creating action:", error);
            return JSON.stringify({
                message: "Error occurred while creating action",
                data: {},
                error,
                status: Status.FAILED
            });
        }
    }

    async deleteAction(actionId: string, tx?: Prisma.TransactionClient) {
        const db = tx || this.client;
        try {
            await db.availableActions.delete({
                where: { id: actionId }
            });

            console.log("[Action deleted]");
            return JSON.stringify({
                message: "Action deleted successfully",
                data: { id: actionId },
                error: {},
                status: Status.SUCCESS
            });
        } catch (error) {
            console.error("Error deleting action:", error);
            return JSON.stringify({
                message: "Error occurred while deleting action",
                data: {},
                error,
                status: Status.FAILED
            });
        }
    }

    async updateAction(actionId: string, fields: Partial<ActionBase>[], tx?: Prisma.TransactionClient) {
        const db = tx || this.client;
        try {
            for (const field of fields) {
                await db.availableActions.update({
                    where: { id: actionId },
                    data: field
                });
            }

            console.log("[Action updated]");
            return JSON.stringify({
                message: "Action updated successfully",
                data: { id: actionId },
                error: {},
                status: Status.SUCCESS
            });
        } catch (error) {
            console.error("Error updating action:", error);
            return JSON.stringify({
                message: "Error occurred while updating action",
                data: {},
                error,
                status: Status.FAILED
            });
        }
    }

    async getActions(appId: string, tx?: Prisma.TransactionClient) {
        const db = tx || this.client;
        try {
            const actions = await db.availableActions.findMany({
                where: { appId: appId }
            });

            if (!actions || actions.length === 0) {
                return JSON.stringify({
                    message: `No actions found for App ID: ${appId}`,
                    data: {},
                    error: {},
                    status: Status.PROCESSED_NOT_SUCCESSFUL
                });
            }

            return JSON.stringify({
                message: "Actions retrieved successfully",
                data: actions,
                error: {},
                status: Status.SUCCESS
            });
        } catch (error) {
            console.error("Error retrieving actions:", error);
            return JSON.stringify({
                message: "Error occurred while retrieving actions",
                data: {},
                error,
                status: Status.FAILED
            });
        }
    }

    async getActionById(actionId: string, tx?: Prisma.TransactionClient) {
        const db = tx || this.client;
        try {
            const action = await db.availableActions.findFirst({
                where: { id: actionId }
            });

            if (!action) {
                return JSON.stringify({
                    message: `No action found with ID: ${actionId}`,
                    data: {},
                    error: {},
                    status: Status.PROCESSED_NOT_SUCCESSFUL
                });
            }

            return JSON.stringify({
                message: "Action retrieved successfully",
                data: action,
                error: {},
                status: Status.SUCCESS
            });
        } catch (error) {
            console.error("Error retrieving action:", error);
            return JSON.stringify({
                message: "Error occurred while retrieving action",
                data: {},
                error,
                status: Status.FAILED
            });
        }
    }
}

import { Prisma } from "../../../generated/prisma";
import { Field, FieldType } from "./Fields";
export interface ActionBase {
    id: string;
    name: string;
    email: string;
    teamId: string;
    type: string;
    timestamp: any;
    inputConfig: Field<FieldType>[];
    createAction(appId: string, actions: any, tx?: Prisma.TransactionClient): Promise<any>;
    deleteAction(action: any, tx?: Prisma.TransactionClient): Promise<any>;
    updateAction(appId: string, actions: Partial<ActionBase>[], tx?: Prisma.TransactionClient): Promise<any>;
    getActions(appId: string, tx?: Prisma.TransactionClient): Promise<any>;
    getActionById(actionId: string, tx?: Prisma.TransactionClient): Promise<any>;
}

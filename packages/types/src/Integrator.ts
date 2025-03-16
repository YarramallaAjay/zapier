import { Action } from "./Actions";
import { Authentication } from "./Authentication";
import { Trigger } from "./Trigger";

export type Integrator ={
    id: string;
    name: string;
    description: string;
    triggerSupported: boolean;
    actionSupported: boolean;
    authentication: Authentication;
    triggers: Trigger[];
    actions: Action[];
    metadata: Record<string, unknown>; 
}

export type Team={
    id: string;
    name: string;
    email: string;
    metadata:{};
    teamMembers: string[];
    integrations: Integrator[];
}
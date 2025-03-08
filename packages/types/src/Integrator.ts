import { Action } from "./Actions";
import { Authentication } from "./Authentication";
import { Trigger } from "./Trigger";

export interface Integrator {
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

export interface Team{
    id: string;
    name: string;
    email: string;
    metadata:{};
    teamMembers: string[];
    integrations: Integrator[];
}
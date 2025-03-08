import { Category } from "./Category";

export interface Action {
    type: Category['type'],
    teamId: string,
    id: string,
    name: string,
    metadata:{},
    timestamp: number,
    inputConfig: Partial<Fileds>[],
    outputConfig: Partial<Fileds>[],
}


interface Fileds {
    name: string;
    type: "string" | "number" | "boolean" | "date" | "file";
    required: boolean;
    description: string;
    defaultValue: string;
    value: string;
    options: string[];

}
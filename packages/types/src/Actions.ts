import { Category } from "./Category";

export type Action={
    type: Category['type'],
    teamId: string,
    id: string,
    name: string,
    metadata:{},
    timestamp: number,
    inputConfig: Partial<Fields>[],
    outputConfig: Partial<Fields>[],
}


interface Fields {
    name: string;
    type: "string" | "number" | "boolean" | "date" | "file";
    required: boolean;
    description: string;
    defaultValue: string;
    value: string;
    options: string[];

}
export type FieldType = "string" | "number" | "boolean" | "date" | "file";
export interface Field<T extends FieldType> {
    name: string;
    type: T;
    required: boolean;
    description: string;
    defaultValue?: FieldValue<T>;
    value?: FieldValue<T>;
    options?: T extends "string" ? string[] : never;
}
export type FieldValue<T extends FieldType> = T extends "string" ? string : T extends "number" ? number : T extends "boolean" ? boolean : T extends "date" ? Date : T extends "file" ? File : never;

export type FieldType = "string" | "number" | "boolean" | "date" | "file";

// Generic Field structure enforcing `value` and `defaultValue` type consistency
export interface Field<T extends FieldType> {
    name: string;
    type: T;
    required: boolean;
    description: string;
    defaultValue?: FieldValue<T>;
    value?: FieldValue<T>;
    options?: T extends "string" ? string[] : never; // Only string fields have options
}

// Type mapping: Ensures `value` and `defaultValue` match the correct type
export type FieldValue<T extends FieldType> =
    T extends "string" ? string :
    T extends "number" ? number :
    T extends "boolean" ? boolean :
    T extends "date" ? Date :
    T extends "file" ? File :
    never;

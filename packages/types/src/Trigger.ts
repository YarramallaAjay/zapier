
export interface Trigger {
    id: string;
    teamId:String;
    name: string;
    description: string;
    type: "Webhook" | "polling" | "real-time";
    config:WebHook | Polling;
    metadata:{};
    inputConfig:Partial<Fileds>[];
    outputConfig: Partial<Fileds>[];
}


interface Fileds {
    name: string;
    type: "string" | "number" | "boolean" | "date" | "file";
    required: boolean;
    description: string;
    defaultValue: string;
    options: string[];

}

interface WebHook{
    name: string;
    description: string;
    url: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    headers: Record<string, string>;
    metadata: {};
    body: string;

}

interface Polling{
    name: string;
    description: string;
    url: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    headers: Record<string, string>;
    frequency: number;
    metadata: {};
    body: string;
}
export type Authentication= {
    type:"OAuth" | "Basic" | "JWT";
    config:OAuth | Basic | JWT;
    id:string;
}

export type OAuth ={
    type:"OAuth";
    clientId:string;
    clientSecret:string;
    authorizationUrl:string;
    tokenUrl:string;
    scope:string;
    redirectUrl:string;
}  
export type Basic ={
    type:"Basic";
    username:string;
    password:string;
}

export interface JWT {
    type: "JWT";
    token:string;
    }
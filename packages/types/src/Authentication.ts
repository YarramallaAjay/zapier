export interface Authentication {
    type:OAuth | Basic | JWT;
    id:string;
}

export interface OAuth {
    type:"OAuth";
    clientId:string;
    clientSecret:string;
    authorizationUrl:string;
    tokenUrl:string;
    scope:string;
    redirectUrl:string;
}  
export interface Basic {
    type:"Basic";
    username:string;
    password:string;
}

export interface JWT {
    type: "JWT";
    token:string;
    }
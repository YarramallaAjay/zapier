import { Prisma } from "@prisma/client"

export interface AuthenticationBase{
    type:"OAuth" |"Basic" |"JWT"
    provider:String
    createAuth(appId:any,data:any,tx?:Prisma.TransactionClient):void
    deleteAuth(app:any,tx?:Prisma.TransactionClient):void
    updateAuth(appId:any,data:any,tx?:Prisma.TransactionClient):void
    getAuths(appId:any,tx?:Prisma.TransactionClient):void
    getAuthById(authId:any,tx?:Prisma.TransactionClient):void
}




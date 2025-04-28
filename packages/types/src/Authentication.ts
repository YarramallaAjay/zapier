import { Prisma } from "@repo/db/src"

export interface AuthenticationBase{
    type:"OAuth" |"Basic" |"JWT"
    provider:String
    createAuth(appId:any,data:any,tx?:Prisma.TransactionClient):Promise<any>
    deleteAuth(app:any,tx?:Prisma.TransactionClient):Promise<any>
    updateAuth(appId:any,data:any,tx?:Prisma.TransactionClient):Promise<any>
    getAuths(appId:any,tx?:Prisma.TransactionClient):Promise<any>
    getAuthById(authId:any,tx?:Prisma.TransactionClient):Promise<any>
}




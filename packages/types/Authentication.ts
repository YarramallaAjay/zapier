export interface AuthenticationBase{
    type:"OAuth" |"Basic" |"JWT"
    provider:String
    saveAuths:(Auths:any)=>Promise<any>
    getAuths:()=>Promise<any>
    deleteAuths:(Auths:any)=>Promise<any>
    updateAuth:(Auths:any)=>Promise<any>
}




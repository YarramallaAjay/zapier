import { AuthenticationBase } from "@repo/types/Authentication";

export class BasicAuth implements AuthenticationBase{
    type!: "OAuth" | "Basic" | "JWT";
    provider!: String;
    constructor(){
       
    }
    saveAuths (data:Partial<BasicAuth>) {
        return new Promise((resolve, reject)=>{
            Object.assign(this,data)
        })
    };
    getAuths () {
        return new Promise((resolve, reject)=>{

        })
    };
    deleteAuths(Auths: any){
        return new Promise((resolve, reject)=>{

        })
    };
    updateAuth(Auths: any){
        return new Promise((resolve, reject)=>{
            
        })
    }

}
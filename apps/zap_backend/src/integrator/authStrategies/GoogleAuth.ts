import {AuthenticationBase} from '@repo/types/Authentication'

export class GoogleAuth implements AuthenticationBase {
    type!: 'OAuth' | 'Basic' | 'JWT';
    provider!: String;
    description!: string;
    authUrl!: string;
    tokenUrl!: string;
    callbackUrl!: String;
    clientID!: String;
    clientSecret;String;


    constructor() {
      
    }

    saveAuths (data:Partial<GoogleAuth>) {
        return new Promise((resolve, reject)=>{
          Object.assign(this,data);

        })

    }
    deleteAuths(Auths: any){
            return new Promise((resolve, reject)=>{

    })
        
    }
    updateAuth(Auths: any){
    return new Promise((resolve, reject)=>{

    })
        
    }
    getAuths () {
    return new Promise((resolcve, reject)=>{
    })

    }
}

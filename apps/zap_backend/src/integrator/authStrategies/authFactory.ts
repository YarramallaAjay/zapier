import { BasicAuth } from "./BasicAuth";
import { GoogleAuth } from "./GoogleAuth";

export class AuthFactory{
    
    constructor(){
        
    }
    createInstance(type:string){
        switch(type){
            case 'oAuth':{
                return new GoogleAuth()
            }
            case 'Basic':{
                return new BasicAuth()
            }
            default:{
                return new GoogleAuth()
            }

    }
}
}


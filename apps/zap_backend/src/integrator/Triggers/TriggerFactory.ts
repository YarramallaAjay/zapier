import { Polling } from "./Polling";
import { WebHook } from "./Webhooks";

export class TriggerFactory{
    static createInstance(type:String){
        switch(type){
            case 'webhook':{
                return new WebHook();
            }
            case 'polling':{
                return new Polling();
            }
            default:{
                return new  WebHook();
            }
    }
}
}
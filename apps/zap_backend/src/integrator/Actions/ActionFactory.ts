import { Email } from "./Email";
import { SolTransaction } from "./SolTransaction";

export class ActionFactory{
    createInstance(type){
        switch(type){
            case 'email':{
                return new Email();
            }
            case 'transaction':{
                return new SolTransaction();
            }
            default:{
                return new Email();
            }
        }
    }
}
import { Authenticators } from "../Application";

export class BasicAuth implements Authenticators{
    async saveAuths():Promise<any>{
        await new Promise(resolve => setTimeout(resolve, 1000));
    }


}
import { application } from "express"

export interface Actions{
    saveActions:(actions:any)=>Promise<any>


}

export interface Triggers{
    saveTriggers:(trigger:any)=>Promise<any>

}

export interface Authenticators{
    saveAuths:()=>Promise<any>

}

export abstract class Application{

    abstract Authentication:Authenticators[]
    abstract Triggers:Triggers[]
    abstract Actions:Actions[]

}
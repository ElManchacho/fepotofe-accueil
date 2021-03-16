import { Answer } from "./answer";

export interface Comment{
    id?:string,
    idCreat?:string,
    pseudoCreat:string,
    dateCreat:string,
    titre:string,
    content:string,
    answers?:Array<Answer>
}
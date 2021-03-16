import { Post } from "./post";

export interface User{
    id?:string,
    nom:string,
    prenom:string,
    pseudo:string,
    dateNaiss:string,
    mail:string,
    password:string,
    photoProfil?:string,
    numTel:string,
    score:string,
    rang:string,
    nbPostsEnCours:string,
    listPosts?:Array<Post>    
}
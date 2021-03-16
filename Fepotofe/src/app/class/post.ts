import { Comment } from "./comment";

export interface Post {
    id?:string,
    idCreat:string,
    nameCreat:string;
    title:string,
    description:string,
    etat?:string,
    docPJ:string,
    imgPJ:string,
    dateCreat:string,
    votePour:string,
    voteContre:string,
    voteNeutre:string,
    listeComment?:Array<Comment>
}
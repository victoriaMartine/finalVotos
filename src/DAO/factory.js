import { MODE } from "../config/config.js"
import Votes from "./votes.js";

class Factory{
 constructor(){}

 static factory = ()=>{
    if(MODE === "memory"){
       return{
        voteService:new Votes(),
       };     
    }
 };
}
export default Factory
import { CANDIDATES } from "../config/config.js"
import Vote from "../models/Vote.js"
import {seedVotes} from "../utils/SeedVotes.js"
import {addVotes} from "../utils/SeedVotes.js"

class Votes{
    constructor(){
       this.votes = []
    }
   
    createVote =  async(voto)=>{
        try {
            this.votes.push(voto)
            console.log('Vote created succesfully!!')
            
        } catch (error) {
            console.log(error)
        }
        
    }

    getVoteXDistrict = async (district)=>{
        const districtVotes = this.votes.filter((vote) => vote.district === district);
        const totalXdistrict = {
          candidatoA: districtVotes.filter((vote) => vote.candidate === CANDIDATES[0]).length,
          candidatoB: districtVotes.filter((vote) => vote.candidate === CANDIDATES[1]).length,
          candidatoC: districtVotes.filter((vote) => vote.candidate === CANDIDATES[2]).length,
          enblanco: districtVotes.filter((vote) => vote.candidate === CANDIDATES[3]).length
        };

        return totalXdistrict;
    }

    getAllVotes = async()=>{

       this.votes.push(...seedVotes())
       
        return this.votes;
    }
    getVotesPercentaje = async ()=>{

        const generals = {
            candidatoA: this.votes.filter((vote) => vote.candidate === CANDIDATES[0]).length,
            candidatoB: this.votes.filter((vote) => vote.candidate === CANDIDATES[1]).length,
            candidatoC: this.votes.filter((vote) => vote.candidate === CANDIDATES[2]).length,
            enblanco: this.votes.filter((vote) => vote.candidate === CANDIDATES[3]).length
          };

    const total = generals.candidatoA + generals.candidatoB + generals.candidatoC + generals.enblanco;
  
    let mayorVotos = Math.max(generals.candidatoA, generals.candidatoB, generals.candidatoC);
  
    if (mayorVotos === generals.candidatoA) {
        generals.candidatoA += generals.enblanco;
    } else if (mayorVotos === generals.candidatoB) {
        generals.candidatoB += generals.enblanco;
    } else {
        generals.candidatoC += generals.enblanco;
    }

    const results = [
      { candidatoA: ((generals.candidatoA / total) * 100).toFixed(2) + "%" },
      { candidatoB: ((generals.candidatoB / total) * 100).toFixed(2) + "%" },
      { candidatoC: ((generals.candidatoC / total) * 100).toFixed(2) + "%" }
    ];
  
    return results
  
  }
    }export default Votes



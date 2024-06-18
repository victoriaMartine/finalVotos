import Factory from "../DAO/factory.js"

class ApiService{
    constructor(){
        this.factory = Factory.factory();
    }
    
     createVote = async(vote)=>{
        try {
            const data = await this.factory.voteService.createVote(vote)
            return data
        } catch (error) {
            return error
        }
    }
    getVoteXDistrict = async(district)=>{
        try {
            const data = await this.factory.voteService.getVoteXDistrict(district)
            return data
        } catch (error) {
            return error
        }
    }

    getAllVotes = async()=>{
        try {
            const data = await this.factory.voteService.getAllVotes()
            return data
        } catch (error) {
            return error
        }
    }

    getVotesPercentaje = async()=>{
        try {
            const data = await this.factory.voteService.getVotesPercentaje()
            return data
        } catch (error) {
            return error
        }
    }
    }
    export default ApiService


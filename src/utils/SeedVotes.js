
import { CANDIDATES, DISTRICTS } from "../config/config.js";
import Vote from "../models/Vote.js";
const RANDOM_VOTES = 4;

export const seedVotes = ()=>{
    const votes = []
    
    for (let i = 0; i < RANDOM_VOTES; i++) {
        votes.push(randomizeVote())
    }

    return votes
}
const randomizeVote = () => {
    const candidate = CANDIDATES[Math.floor(Math.random() * CANDIDATES.length)];
    const district = DISTRICTS[Math.floor(Math.random() * DISTRICTS.length)];

    return new Vote(district, candidate)

}
export const addVotes = (votes, addedVotes)=>{
addedVotes.array.forEach(element => {
    votes.push(element)
});
} 

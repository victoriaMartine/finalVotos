import { CANDIDATES } from "../config/config.js"

const validateCandidate = (candidate)=>{
    if(!CANDIDATES.includes(candidate)){
        throw new Error(' Invalid candidate')
    }
}
export default validateCandidate
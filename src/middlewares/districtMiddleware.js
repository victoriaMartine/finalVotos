import { DISTRICTS } from "../config/config.js"

const validateDistrict = (district)=>{
    if(!DISTRICTS.includes(district)){
        throw new Error('Invalid district')
    }
}
export default validateDistrict
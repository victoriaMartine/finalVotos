import validateCandidate from "../middlewares/candidateMiddleware.js"
import validateDistrict from "../middlewares/districtMiddleware.js"

export const validateParams = (district, candidate)=>{
  let errors = [];
  try {
    validateDistrict(district);
  } catch (error) {
    errors.push(error);
  }
try {
  validateCandidate(candidate);
} catch (error) {
  errors.push(error);
}
  return errors;
}

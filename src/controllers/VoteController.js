import { request,response } from "express";
import ApiService from "../api/ApiService.js";
import ApiResponse from "../models/apiResponse.js";
import {validateParams} from "../utils/VoteValidator.js";
import validateDistrict from "../middlewares/districtMiddleware.js";

const service  = new ApiService();

class Controller{
    constructor(){}
 
    createVotes = async (req = request, res= response)=>{
        try {
            const {district, candidate} = req.body;
            if(!district || !candidate) throw new Error('data is missing');
            const errors = validateParams(district, candidate);
            if(errors.length > 0) throw new Error(errors.join(','));

           const voto =  service.createVote({district, candidate})
            res.status(200).send(new ApiResponse(true, "Vote created succesfully",{district, candidate}));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }

    getVotesByDistrict = async (req = request, res= response)=>{
        try {
            const {district} = req.query;
            validateDistrict(district);
            let data = await service.getVoteXDistrict(district);
            res.status(200).send(new ApiResponse(true, `votes from district ${district} `, data));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }
    getAllVotes = async (req = request, res= response)=>{
        try {
          const data = await service.getAllVotes();
          res.status(200).send(new ApiResponse(true, "Total Votes", data));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }
    getVotesPercentaje = async (req = request, res= response)=>{
        try {
            let data = await service.getVotesPercentaje();
            res.status(200).send(new ApiResponse(true, " Percentaje of Votes", data));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }
}
export default Controller;
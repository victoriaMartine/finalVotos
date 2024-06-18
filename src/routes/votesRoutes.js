import { Router } from 'express';
import Controller from '../controllers/voteController.js';

const votesRouter = Router();
const controller = new Controller();

votesRouter.post('/', controller.createVotes)
votesRouter.get('/', controller.getVotesByDistrict)
votesRouter.get('/getAll', controller.getAllVotes)
votesRouter.get('/getPercentaje', controller.getVotesPercentaje)

export default votesRouter;
import express from 'express'
import votesRouter from '../routes/votesRoutes.js';

const router = express.Router();

router.use('/votes', votesRouter)

export default router;


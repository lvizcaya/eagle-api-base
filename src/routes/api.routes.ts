import { Router } from 'express';
import { example } from "../controllers/api.controller";

const router = Router();

router.get('/example', example);

export default router;

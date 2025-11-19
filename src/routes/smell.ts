import {Router} from 'express';
import {addSmell, getRandomSmell, reactSmell, getPopularSmells, getAllSmells, deleteSmell, getStats} from "../controllers/smellsController";

const router = Router();

router.post('/', addSmell);
router.delete("/:id", deleteSmell);
router.get('/random', getRandomSmell);
router.post('/react', reactSmell);
router.get('/popular', getPopularSmells);
router.get('/stats', getStats);

export default router;
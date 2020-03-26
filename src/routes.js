import { Router } from "express";
import OngController from  "./controllers/ongController";


const router = Router();

router.post('/ong', OngController.save);

export default router;



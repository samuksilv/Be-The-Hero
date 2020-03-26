import { Router } from "express";
import OngController from  "./controllers/ongController";
import IncidentController from "./controllers/incidentController";

const router = Router();

router.post('/ong', OngController.create);
router.get('/ong', OngController.list);

router.post('/incident', IncidentController.create);
router.get('/incident', IncidentController.list);
router.delete('/incident/:id', IncidentController.delete);

export default router;



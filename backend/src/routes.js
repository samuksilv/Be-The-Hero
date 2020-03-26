import { Router } from "express";
import OngController from  "./controllers/ongController";
import IncidentController from "./controllers/incidentController";
import ProfileController from "./controllers/profileController";
import SessionController from "./controllers/sessionController";

const router = Router();

router.post('/ong', OngController.create);
router.get('/ong', OngController.list);

router.post('/incident', IncidentController.create);
router.get('/incident', IncidentController.list);
router.delete('/incident/:id', IncidentController.delete);

router.get('/profile/incident', ProfileController.list);

router.post('/session/login', SessionController.login);

export default router;



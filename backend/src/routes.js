import { Router } from 'express';
import OngController from  './controllers/ongController';
import IncidentController from './controllers/incidentController';
import ProfileController from './controllers/profileController';
import SessionController from './controllers/sessionController';

const router = Router();

router.post('/ongs', OngController.create);
router.get('/ongs', OngController.list);
router.delete('/ongs/:id', OngController.delete);

router.post('/incidents', IncidentController.create);
router.get('/incidents', IncidentController.list);
router.delete('/incidents/:id', IncidentController.delete);

router.get('/profiles/incidents', ProfileController.list);

router.post('/sessions/login', SessionController.login);

export default router;



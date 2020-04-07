import { Router } from 'express';
import OngController from './controllers/ongController';
import IncidentController from './controllers/incidentController';
import ProfileController from './controllers/profileController';
import SessionController from './controllers/sessionController';
import { ongCreateValidator, ongDeleteValidator } from "./validations/ongValidations";
import { authorizationValidator } from "./validations/authorizationValidations";
import { incidentDeleteValidator, incidentListPaginateValidator, incidentCreateValidator} from "./validations/incidentsValidatons";
import { sessionLoginValidator } from "./validations/sessionValidatons";

const router = Router();

router.post('/ongs', ongCreateValidator, OngController.create);
router.get('/ongs', OngController.list);
router.delete('/ongs/:id', ongDeleteValidator, OngController.delete);

router.post('/incidents', authorizationValidator, incidentCreateValidator, IncidentController.create);
router.get('/incidents', incidentListPaginateValidator, IncidentController.list);
router.delete('/incidents/:id', authorizationValidator, incidentDeleteValidator, IncidentController.delete);

router.get('/profiles/incidents', authorizationValidator, ProfileController.list);

router.post('/sessions/login', sessionLoginValidator, SessionController.login);

export default router;



import { Router } from 'express';
const router = Router();
import * as formController from '../controllers/formController.js';
import { verifyToken } from '../middleware/auth.js';

router.post('/application-forms', verifyToken, formController.createForm);
router.get('/get-forms-data', verifyToken, formController.getAllForms);
router.post('/form-data-by-status-step', verifyToken, formController.getFormDataByStatus);
router.put('/update-form-data:id', verifyToken, formController.updateForm);

export default router;
import { Router } from 'express';
import {
  addSkillToProfile,
  removeSkillFromProfile,
} from '../controllers/profileSkillController.js';

const router = Router();

router.post('/', addSkillToProfile);
router.delete('/:profile_id/:skill_id', removeSkillFromProfile);
// TODO 

export default router;

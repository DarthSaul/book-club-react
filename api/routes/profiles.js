import express from 'express';
import ProfileCtrl from '../controllers/profiles.js';

const router = express.Router();

router.route('/:profile_id').get(ProfileCtrl.apiGetProfileById);
router.route('/create').post(ProfileCtrl.apiCreateProfile);

export default router;

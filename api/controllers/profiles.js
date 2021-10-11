import Profile from '../../models/Profile.js';

export default class ProfileController {
    static async apiGetProfileById(req, res, next) {
        try {
            const profile = await Profile.findById(req.params.profile_id);
            res.json(profile);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err });
        }
    }
    static async apiCreateProfile(req, res, next) {
        try {
            const profile = new Profile(req.body);
            await profile.save();
            res.json(profile);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err });
        }
    }
}

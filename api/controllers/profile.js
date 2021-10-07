import Profile from '../../models/Profile.js';

export default class ProfileController {
    static async apiGetProfileById(req, res, next) {
        try {
            const profile = await Profile.findById(req.params.profile_id);
            console.log(profile);
            res.send(profile);
        } catch (err) {
            console.error(err);
            res.send(err);
        }
    }
    static async apiCreateProfile(req, res, next) {
        try {
            const profile = new Profile(req.body);
            await profile.save();
            console.log(profile);
            res.send(profile);
        } catch (err) {
            console.error(err);
            res.send(err);
        }
    }
}

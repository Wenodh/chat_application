const router = require('express').Router();
const User = require('../models/User.js');
const bcrypt = require('bcrypt');

//update user
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
    } else {
        return res.status(403).json('you can update your account only');
    }
});
module.exports = router;

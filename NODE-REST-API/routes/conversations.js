const router = require('express').Router();
const Conversation = require('../models/Conversation');
//new conversation
router.post('/', async (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
    });
    try {
        if (
            !req.body.senderId ||
            !req.body.receiverId ||
            req.body.senderId === req.body.receiverId
        ) {
            return res.status(400).send({ error: 'Missing fields' });
        }
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get conversation of user
router.get('/:userId', async (req, res) => {
    try {
        const conversations = await Conversation.find({
            members: { $in: [req.params.userId] },
        });
        res.status(200).json(conversations);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get conv includes two userId

router.get('/find/:firstUserId/:secondUserId', async (req, res) => {
    try {
        const conversation = await Conversation.findOne({
            members: {
                $all: [req.params.firstUserId, req.params.secondUserId],
            },
        });
        res.status(200).json(conversation);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;

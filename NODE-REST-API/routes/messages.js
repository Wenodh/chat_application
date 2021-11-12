const router = require('express').Router();
const Message = require('../models/message');

//add message
router.post('/', async (req, res) => {
    const message = new Message(req.body);
    try {
        const saveMessage = await message.save();
        res.status(200).send(saveMessage);
    } catch (err) {
        res.status(500).send(err);
    }
});

//get message
router.get('/:conversationId', async (req, res) => {
    try {
        const messages = await Message.find({
            conversationId: req.params.conversationId,
        });
        res.status(200).send(messages);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;

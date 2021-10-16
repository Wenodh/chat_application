const router = require('express').Router();
const Post = require('../models/Post');
//create a post
router.post('/', async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();
        res.status(200).json({ success: true, data: newPost });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

//update a post
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json({ success: true, message: 'post updated' });
        } else {
            res.status(403).json('you can update only your post');
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

//delete a post
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json({ success: true, message: 'post deleted' });
        } else {
            res.status(403).json('you can delete only your post');
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

//like / dislike a post

router.put('/:id/like', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({
                $push: { likes: req.body.userId },
            });
            res.status(200).json({
                success: true,
                message: 'The post has been liked',
            });
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json({
                success: true,
                message: 'The post has been disliked',
            });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

//get a post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({ success: true, data: post });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

//get timeline posts
router.get('/timeline/all', async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
        res.status(200).json({
            success: true,
            data: userPosts.concat(...friendPosts),
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;

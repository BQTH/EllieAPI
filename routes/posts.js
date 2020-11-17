const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Get all posts
router.get('/', async (req, res) => {
    console.log("inside get");
    //res.send('We are on posts');
    try{
        console.log("inside try");
        const posts = await Post.find();
        console.log("posts");
        res.json(posts);
    }
    catch(err){
        res.json({message: err});
    }
});

//Submit a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    
    /* Check
    console.log("ready to save");
    console.log(
        post.title
    );*/
    
    try{
    const savedPost = await post.save();
    res.json(savedPost);
    } catch(err){
    res.json({message: err});
    }
});

//Get specific post
router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch(err) {
        res.json({message: err});
    }
});

//Update
router.patch('/:postId', async (req,res) => {
    try {
        const updatedPost = await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}});
        res.json(updatedPost);
    }
    catch(err) {
        res.json({message: err});
    }
    });

//Delete a post
router.delete('/:postId', async (req,res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost)
    }
    catch(err) {
        res.json({message: err})
    }
});

module.exports = router;
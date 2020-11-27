const express = require('express');
const router = express.Router();
const Co2Post = require('../models/Co2');

//Get all co2 posts
router.get('/', async (req, res) => {
    try{
        const co2posts = await Co2Post.find();
        res.json(co2posts);
    }
    catch(err){
        res.json({message: err});
    }
});

//Submit a post
router.post('/', async (req, res) => {
    const co2post = new Co2Post({
        title: req.body.title,
        ppm: req.body.ppm
    });
    
    /* Check
    console.log("ready to save");
    console.log(
        post.title
    );*/
    
    try{
    const savedco2Post = await co2post.save();
    res.json(savedco2Post);
    } catch(err){
    res.json({message: err});
    }
});

//Get specific post
router.get('/:co2postId', async (req, res) => {
    try{
        const co2post = await Co2Post.findById(req.params.postId);
        res.json(co2post);
    } catch(err) {
        res.json({message: err});
    }
});

//Update
router.patch('/:co2postId', async (req,res) => {
    try {
        const updatedCo2Post = await Co2Post.updateOne({_id: req.params.co2postId}, {$set: {title: req.body.title}});
        res.json(updatedCo2Post);
    }
    catch(err) {
        res.json({message: err});
    }
    });

//Delete a post
router.delete('/:co2postId', async (req,res) => {
    try{
        const removedCo2Post = await Co2Post.remove({_id: req.params.co2postId});
        res.json(removedCo2Post)
    }
    catch(err) {
        res.json({message: err})
    }
});

module.exports = router;
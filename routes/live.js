const express = require('express');
const router = express.Router();
const Live = require('../models/Live');

//Get live data
router.get('/', async (req, res) => {
    //res.send('We are on posts');
    try {
        const live = await Live.find();
        res.json(live);
    }
    catch (err) {
        res.json({ message: err });
    }
});

//Submit a post
router.post('/', async (req, res) => {
    const live = new Live({
        _id: req.body._id,
        title: req.body.title,
        ppm: req.body.ppm
    });

    /*Check
    console.log("ready to save");
    console.log(
        live.ppm
    );*/

    try {
        const savedLive = await live.save();
        res.json(savedLive);
    } catch (err) {
        res.json({ message: err });
    }
});

//Get specific post
router.get('/:liveId', async (req, res) => {
    try {
        const live = await Live.findById(req.params.liveId);
        res.json(live);
    } catch (err) {
        res.json({ message: err });
    }
});

//Update
router.patch('/:liveId', async (req, res) => {
    try {
        const updatedLive = await Live.updateOne({ _id: req.params.liveId }, { $set: { title: req.body.title, ppm: req.body.ppm } });
        res.json(updatedLive);
    }
    catch (err) {
        res.json({ message: err });
    }
});


router.put('/:liveId', async (req, res) => {
    try {
        const updatedLive = await Live.updateOne({ _id: req.params.liveId }, { $set: { title: req.body.title, ppm: req.body.ppm } });
        res.json(updatedLive);
    }
    catch (err) {
        res.json({ message: err });
    }
});

//Delete a post
router.delete('/:liveId', async (req, res) => {
    try {
        const removedLive = await Live.remove({ _id: req.params.liveId });
        res.json(removedLive)
    }
    catch (err) {
        res.json({ message: err })
    }
});

module.exports = router;
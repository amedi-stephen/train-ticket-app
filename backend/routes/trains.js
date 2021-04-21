const express = require("express");
const trainRouter = express.Router();
const Train = require('../models/Train')

// TODO: 
// get all trains
trainRouter.get("/trains", async(req, res) => {
    try {
        const trains = await Train.find()
        res.json(trains)
    } catch (error) {
        res.json({msg: error})
    }
})
// get trains going to specific destination

// get one train
trainRouter.get("/trains/:train_id", async(req, res) => {
    try {
        const train = await Train.findById(req.params.id)
        res.json(train)
    } catch (error) {
        res.json({msg: error})
    }
})
// allow for posting of a train by admin (after we have finished customer side)

module.exports = trainRouter;
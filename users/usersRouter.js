// import express
const express = require('express');
// import model
const Users = require('./usersModel.js')

// create the router
const router = express.Router()

// -  Notify API Router of the new route

// endpoints
router.get('/', (req, res) => {
    console.log("This is the req.session:", req.session)
    Users.find()
    .then((users) => {
        res.status(200).json(users)
    })
    .catch((error) => {
        res.status(500).json({error})
    })
})
// - Setup the Router to export 
module.exports = router
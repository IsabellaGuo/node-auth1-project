// import express
const express = require('express');
// create the router
const router = express.Router()

// Bring in the database
const Users = require('../users/usersModel.js');
// bring in bcrypt
const bcrypt = require('bcryptjs');

// create the endpoints:
// - REGISTER -
router.post('/register', (req, res) => {
    // find the user info
    let user = req.body;
    // hash the user password
    const hash = bcrypt.hashSync(user.password, 8)
    // set the user password to the hash before saved to the databse
    user.password = hash
    // helper method
    Users.add(user)
        .then((newUser) => {
            res.status(201).json({message:"Registered"})
            
            req.session.loggedIn = true
        })
        .catch((error) => {
            res.status(500).json({ error })
            console.log(error);
            
        })
})
// - LOGIN - 
router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then((user) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                //Add session
                req.session.loggedIn = true;
                req.session.username = user.username;

                res.status(200).json({ message:"Logged In" })
            } else {
                res.status(401).json({ message:'Invalid credentials' })
            }
        })
        .catch((error) => {
            res.status(500).json(error)
        })
})
// export the router to API Router
module.exports = router;
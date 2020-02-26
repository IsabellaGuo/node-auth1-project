
// import bcrypt
const bcrypt = require('bcryptjs')
// import model for Users
const Users = require('../users/usersModel.js')
// build and export the middleware function
module.exports = function restrict(req, res, next) {
    let { username, password } = req.body;
    
    if (username && password) {
        next()
    
        Users.findBy({ username })
            .first()
        .then((user) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                next()
            } else {
                res.status(401).json({ message:"Invalid credentials" })
            }
        })
        .catch(({ name, message, stack }) => {
            res.status(500).json({ name, message, stack })
        })
    } else {
        res.status(400).json({ message:"fault." })
    }
}
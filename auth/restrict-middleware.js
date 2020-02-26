// build and export the middleware function
module.exports = function restrict(req, res, next) {
   // No imports are needed for this piece of middleware when using cookies and session
   if (req.session && req.session.loggedIn) {
    next();
} else {
    res.status(401).json({ message:"You need to be logged in to access this point." })
}
}
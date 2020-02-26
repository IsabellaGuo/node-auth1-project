// import the server
const server = require('./server.js');
// setup the dynamic port
const PORT = process.env.PORT || 5000
// start the server
server.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`)
})
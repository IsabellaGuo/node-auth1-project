// import config object from data folder
const db = require('../data/dbConfig')
// create an object full of helper functions to export
module.exports = {
find,
findBy,
add,
findById
} // these will need to be imported to the AUTH Router as well

// HELPER METHODS

// - find all
function find() {
    return db('users')
            .select('id', 'username', 'password')
}
// - findBy(filter/username)
function findBy(filter) {
    return db('users')
            .select('id', 'username', 'password')
            .where(filter)
}
// - Add
function add(user) {
    return db('users')
            .insert(user, 'id')
            .then((ids) => {
                const [id] = ids
                return findById(id)
            })
}


// findBy(id)
function findById(id) {
    return db('users')
            .select('id', 'username')
            .where({ id })
            .first
}
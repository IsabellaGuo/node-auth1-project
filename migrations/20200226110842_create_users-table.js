
exports.up = function(knex) {
    return knex.schema.createTable('users', user_tbl => {
        // unique identifier   
        user_tbl.increments();
        // unique username
        user_tbl.string('username', 20)
                .notNullable()
                .unique()
        // required password
        user_tbl.string('password', 64)
                .notNullable()
          })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};

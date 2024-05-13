// This line imports the 'db-config' module from the specified path.
const db = require('../../data/db-config');

// This function 'getAll' returns all records from the 'mushrooms' table in the database.
const getAll = () => {
    return db('mushrooms');
};

// This function 'getById' returns a single record from the 'mushrooms' table based on the provided 'id'.
const getById = (id) => {
    return db('mushrooms').where({ id }).first();
};

// This exports the 'getAll' and 'getById' functions to be used in other modules.
module.exports = {
    getAll,
    getById
};

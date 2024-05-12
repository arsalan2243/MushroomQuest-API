const db = require('../../data/db-config');

const getAll = () => {
    return db('mushrooms');
};

const getById = (id) => {
    return db('mushrooms').where({ id }).first();
};

module.exports = {
    getAll,
    getById
};

const db = require('../../data/db-config')
const getAll=  ()=>{
    return db('mushrooms') 
}

module.exports = {
    getAll
}



// This line imports the database configuration from 
//a file located two levels up from the current file.
const db = require('../../data/db-config')

// This function inserts a new user into the 'users' table 
//and returns the newly created user object.
async function insertUser(user) {
  const [newUserObject] = await db('users')
    .insert(user, ['user_id', 'username', 'email', 'password'])
  return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}

// This function finds and returns users based on the provided filter criteria.
function findBy(filter) {
  return db('users')
    .select('user_id', 'username', 'email', 'password')
    .where(filter)
}

// This function retrieves a user by their user_id.
function getById(id) {
  return db('users')
    .where('user_id', id)
    .first()
}

// This function updates a user's password based on their email.
async function updateUserPassword(email, newPasswordHash) {
  return db('users')
    .where('email', email)
    .update({ password: newPasswordHash });
}

// This function deletes a user by their username.
async function deleteUser(username) {
  return db('users')
    .where('username', username)
    .del();
}

// This exports all the functions for use in other modules.
module.exports = {
  insertUser,
  findBy,
  getById,
  updateUserPassword,
  deleteUser
};

const db = require('../../data/db-config')

async function insertUser(user) {
    const [newUserObject] = await db('users')
      .insert(user, ['user_id', 'username', 'email', 'password'])
    return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
  }

  function findBy(filter) {
      return db('users')
        .select('user_id', 'username', 'email', 'password')
        .where(filter)
  }

  function getById(id) {
    return db('users')
      .where('user_id', id)
      .first()
  }

async function updateUserPassword(email, newPasswordHash) {
    return db('users')
        .where('email', email)
        .update({ password: newPasswordHash });
}

async function deleteUser(email) {
    return db('users')
        .where('email', email)
        .del();
}

module.exports = {
    insertUser,
    findBy,
    getById,
    updateUserPassword,
    deleteUser
};

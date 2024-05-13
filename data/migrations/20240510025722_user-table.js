/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// Defines the 'up' function that will be executed when migrating to the latest database schema version.
exports.up = async function(knex) {
    // Creates a new table 'mushrooms' with the specified columns.
    await knex.schema
    .createTable('mushrooms',table=>{
      table.increments('mushroom_id').primary(); // Creates an auto-incrementing primary key 'mushroom_id'.
      table.string('name').unique().notNullable(); // Creates a unique, non-nullable column 'name' of type string.
      table.string('img').notNullable(); // Creates a non-nullable column 'img' of type string.
      table.string('pileus'); // Creates an optional column 'pileus' of type string.
      table.string('lamellae'); // Creates an optional column 'lamellae' of type string.
      table.string('stipe'); // Creates an optional column 'stipe' of type string.
      table.text('edibility'); // Creates a column 'edibility' of type text.
      table.boolean('regular').notNullable().defaultTo(true); // Creates a non-nullable boolean column 'regular' with a default value of true.
      table.string('color'); // Creates an optional column 'color' of type string.
    })
    // Creates a new table 'users' with the specified columns.
    .createTable('users',table=>{
      table.increments('user_id').primary(); // Creates an auto-incrementing primary key 'user_id'.
      table.string('username') // Creates a column 'username' of type string.
      .unique() // Ensures that the 'username' column values are unique.
      .notNullable(); // Specifies that the 'username' column cannot be null.
      table.string('email').unique().notNullable(); // Creates a unique, non-nullable column 'email' of type string.
      table.string('password').notNullable(); // Creates a non-nullable column 'password' of type string.
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  // Defines the 'down' function that will be executed when rolling back the database schema.
  exports.down = async function(knex) {
    // Drops the 'users' and 'mushrooms' tables if they exist.
    await knex.schema
    .dropTableIfExists('users') // Drops the 'users' table if it exists.
    .dropTableIfExists('mushrooms'); // Drops the 'mushrooms' table if it exists.
  };
  
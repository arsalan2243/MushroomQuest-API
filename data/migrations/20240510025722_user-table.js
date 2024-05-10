/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
  .createTable('mushrooms',table=>{
    table.increments('mushroom_id').primary();
    table.string('name').unique().notNullable();
    table.string('img').notNullable();
    table.string('pileus');
    table.string('lamellae');
    table.string('stipe');
    table.text('edibility');
    table.boolean('regular').notNullable().defaultTo(true);
    table.string('color')
  })
  .createTable('users',table=>{
    table.increments('user_id').primary();
    table.string('username')
    .unique()
    .notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = async function(knex) {
    await knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('mushrooms')
};

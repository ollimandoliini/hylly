exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(t) {
      t.increments('id');
      t.string('name').notNull();
      t.datetime('created_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('collections', function(t) {
      t.increments('id')
        .unsigned()
        .primary();
      t.integer('user_id')
        .unsigned()
        .notNull();
      t.foreign('user_id')
        .references('users.id')
        .onDelete('CASCADE');
      t.string('title').notNull();
      t.string('description').nullable();
      t.datetime('created_at').defaultTo(knex.fn.now());
      t.index('user_id');
    }),
    knex.schema.createTable('additional_collection_fields', function(t) {
      t.increments('id')
        .unsigned()
        .primary();
      t.integer('collection_id')
        .unsigned()
        .notNull();
      t.foreign('collection_id')
        .references('id')
        .on('collections')
        .onDelete('CASCADE');
      t.integer('user_id')
        .unsigned()
        .notNull();
      t.foreign('user_id')
        .references('id')
        .on('users')
        .onDelete('CASCADE');
      t.string('field_name').notNull();
      t.index('collection_id');
    }),
    knex('users').insert({ id: 1, name: 'testuser' }),
    knex('collections').insert({ user_id: 1, title: 'test', description: 'test collection' })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('additional_collection_fields'),
    knex.schema.dropTable('collections'),
    knex.schema.dropTable('users')
  ]);
};

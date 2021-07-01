exports.up = function(knex) {
    return knex.schema
      .createTable('type', function(table) {
        table
          .increments('id_type')
          .primary()
          .notNullable()
          .unique()
          .unsigned();
        table.string('type_name').unique().notNullable();
      })
      .createTable('lesson', function(table) {
        table
          .increments('id_lesson')
          .primary()
          .notNullable()
          .unique()
          .unsigned();
        table.string('lesson_name').notNullable();
        table.string('title').notNullable();
        table.string('subtitle').notNullable();
        table.string('description').notNullable();
        table.string('image_link').notNullable();
        table
          .string('type')
          .references('type_name')
          .inTable('type');
        table.bool('is_published').notNullable();
        table
          .bigInteger('created_at')
          .notNullable()
          .defaultTo(Date.now());
      });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('type').dropTable('lesson');
  };
  
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('type').del()
    .then(function () {
      // Inserts seed entries
      return knex('type').insert([
        {id_type: 1, type_name: 'article'},
        {id_type: 2, type_name: 'webinar'},
        {id_type: 3, type_name: 'course'}
      ]);
    });
};


exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Whiting Fish'},
        {name: 'Cheese'},
        {name: 'Tomatoes'}
      ]);
};


exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('recipes').insert([
        {dish_id: 1, name: 'Fish Tacos'},
        {dish_id: 2, name: 'Meaty Pizza'},
        {dish_id: 3, name: 'Corn Beef Hash Meatloaf'}
      ]);
};

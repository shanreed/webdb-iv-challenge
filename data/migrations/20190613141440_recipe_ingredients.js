
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', tbl => {
        
        tbl.increments();
  
        tbl
          .integer('recipe_id')
          .unsigned()
          .references('id')
          .inTable('recipes')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
  
        tbl
          .integer('ingredient_id')
          .unsigned()
          .references('id')
          .inTable('ingredients')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      });
  };


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_ingredients')
  
};

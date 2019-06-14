const knex = require('knex');

const knexConfig = {
  client: 'sqlite3', 
  useNullAsDefault: true, 
  connection: {
    filename: './data/recipebook.db3'
  }
};

const db = knex(knexConfig);

module.exports = {
  getDishes,
  addDishes,
};

function getDishes() {
  return db('recipes'); 
}

function addDishes(recipe) {
    return db('recipes')
      .insert(recipe)
      .then(ids => {
        const [id] = ids;
        return db('recipes')
          .where({ id })
          .first();
      });
  }


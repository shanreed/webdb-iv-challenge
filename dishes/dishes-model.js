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
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db('dishes'); 
}

function findById(id) {
  return db('dishes')
    .where({ id })
    .first(); 
}

function add(dish) {
  return db('dishes')
    .insert(dish)
    .then(ids => {
      const [id] = ids;

      return db('dishes')
        .where({ id })
        .first();
    });
}

function update(id, changes) {
  return db('dishes')
    .where({ id })
    .update(changes)
    .then(() => {
      return db('dishes')
        .where({ id })
        .first();
    });
}

function remove(id) {
  return db('dishes')
    .where({ id })
    .del();
}
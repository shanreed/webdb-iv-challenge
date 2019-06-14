const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: './data/recipebook.db3',
  },
  useNullAsDefault: true, // needed for sqlite
};
const db = knex(knexConfig);

const server = express();

server.use(helmet());
server.use(express.json());

// list all dishes
server.get('/api/dishes', async (req, res) => {
  // get the dishes from the database
  try {
    const dishes = await db('dishes'); // all the records from the table
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json(error);
  }
});

// list all recipes
server.get('/api/recipes', async (req, res) => {
  // get the recipes from the database
  try {
    const recipes = await db('recipes'); // all the records from the table
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

// list all ingredients
server.get('/api/ingredients', async (req, res) => {
  // get the ingredients from the database
  try {
    const ingredients = await db('ingredients'); // all the records from the table
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json(error);
  }
});

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);


const db = require('./recipes-model');

const router = require('express').Router();

router.get('/', (req, res) => {
  // get the recipes from the database
  db.getDishes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/', (req, res) => {
  // add a recipe to the database
  db.addDishes(req.body)
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});



module.exports = router;
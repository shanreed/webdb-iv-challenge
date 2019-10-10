
const db = require('./dishes-model');

const router = require('express').Router();

router.get('/', (req, res) => {
  // get the dishes from the database
  db.find()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id', (req, res) => {
  // retrieve a dish by id
  db.findById(req.params.id)
    .then(dishes => {
      res.json(dishes);
    })
    .catch(err => {
      res.status(200).json(err);
    });
});

router.post('/', (req, res) => {
  // add a dish to the database
  db.add(req.body)
    .then(dish => {
      res.status(201).json(dish);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
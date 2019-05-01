const express = require('express');
const { signup } = require('../controllers');

const setup = () => {
  const controller = signup();
  
  const router = express.Router();

  // Attaches middleware to route
  router.get('/', controller);

  return router;
}

module.exports = setup;
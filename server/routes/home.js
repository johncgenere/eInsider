const express = require('express');
const { home } = require('../controllers');

const setup = () => {
  const controller = home();
  
  const router = express.Router();

  // Attaches middleware to route
  router.get('/', controller);

  return router;
}

module.exports = setup;
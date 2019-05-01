const express = require('express');
const { profile } = require('../controllers');

const setup = () => {
  const controller = profile();
  
  const router = express.Router();

  // Attaches middleware to route
  router.get('/', controller);

  return router;
}

module.exports = setup;
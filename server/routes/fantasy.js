const express = require('express');
const { fantasy } = require('../controllers');

const setup = () => {
  const controller = fantasy();
  
  const router = express.Router();

  // Attaches middleware to route
  router.get('/', controller);

  return router;
}

module.exports = setup;
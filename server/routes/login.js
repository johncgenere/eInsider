const express = require('express');
const { login } = require('../controllers');

const setup = () => {
  const controller = login();
  
  const router = express.Router();

  // Attaches middleware to route
  router.get('/', controller);

  return router;
}

module.exports = setup;
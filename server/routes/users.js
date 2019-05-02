const express = require('express');
const { users } = require('../controllers');

const setup = (context) => {
  const controller = users(context);
  
  const router = express.Router();

  router.get('/profile', controller.profile);
  router.post('/register', controller.register);
  router.post('/login', controller.login);
  router.delete('/logout', controller.logout);

  return router;
}

module.exports = setup;
const express = require('express');
const { home } = require('../controllers');

const setup = () => {
  const controller = home();
  
  const router = express.Router();

  // Sub routes for different games
  router.get('/lol', controller.lol);
  router.get('/dota2', controller.dota2);
  router.get('/overwatch', controller.overwatch);
  router.get('/csgo', controller.csgo);
  router.get('/callofduty', controller.callofduty);
  router.get('/quake', controller.quake);

  return router;
}

module.exports = setup;
const express = require('express');
const { home } = require('../controllers');

const setup = () => {
  const controller = home();
  
  const router = express.Router();

  // Sub routes for different games
  router.get('/', controller.upcomingTournaments);
  router.get('/lol', controller.lol);
  router.get('/dota2', controller.dota2);
  router.get('/ow', controller.ow);
  router.get('/csgo', controller.csgo);

  return router;
}

module.exports = setup;
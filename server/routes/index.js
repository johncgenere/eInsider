const express = require('express');
const request = require('superagent');

//Put this token in a separate file and git ignore it but for now WEEEEE
const token = 'K-vNqWhG9uYGlPgD-SunEJu9bLZNfw_uOBi_2rGPgIp7b56V5lM';

const routes = () => {

  var objectData = []; // array that stores objects about the next upcoming tournament per game. 

  const app = express();
  
  app.use('/home', require('./home')());
  app.use('/fantasy', require('./fantasy')());
  app.use('/profile', require('./profile')());
  app.use('/login', require('./login')());
  app.use('/signup', require('./signup')());

  app.use('/', (req, res, next) => {
    return res
      .status(200)
      .send(
        `Welcome to eInsider api`
      );
  });
 
  return app;
};

const attachRoutes = app => {
  app.use('/', routes());
};

module.exports = attachRoutes;

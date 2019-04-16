const express = require('express');

const routes = () => {
  const app = express();
  
  app.use('/home', require('./home')());
  app.use('/fantasy', require('./fantasy')());
  app.use('/profile', require('./profile')());
  app.use('/login', require('./login')());
  app.use('/signup', require('./signup')());

  app.use('/', (req, res, next) => {
    return res
      .status(200)
      .send(`Welcome to eInsider`);
  });

  return app;
};

const attachRoutes = app => {
  app.use('/', routes());
};

module.exports = attachRoutes;

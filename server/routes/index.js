const express = require('express');

const routes = () => {
  const app = express();

  app.use('/', require('./home')());
  app.use('/fantasy', require('./fantasy')());
  app.use('/profile', require('./profile')());
  app.use('/login', require('./login')());
  app.use('/signup', require('./signup')());

  return app;
};

const attachRoutes = app => {
  app.use('/', routes());
};

module.exports = attachRoutes;

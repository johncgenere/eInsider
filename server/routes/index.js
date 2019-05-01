const express = require('express');

const routes = () => {
  
  const app = express();
  
  app.use('/home', require('./home')());
  app.use('/fantasy', require('./fantasy')());
  app.use('/profile', require('./profile')());
  app.use('/login', require('./login')());
  app.use('/signup', require('./signup')());

  app.use('/', (req, res, next) => {
    console.log("You have hit [GET] / endpoint");
    let responseMessage = 'Welcome to eInsider api';
    console.log("Sending back the following message:\n" + responseMessage);
    return res
      .status(200)
      .send(responseMessage);
  });
 
  return app;
};

const attachRoutes = app => {
  app.use('/', routes());
};

module.exports = attachRoutes;

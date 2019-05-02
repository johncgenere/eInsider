const express = require('express');

const routes = context => {

  const app = express();
  
  app.use('/home', require('./home')());
  app.use('/fantasy', require('./fantasy')());
  app.use('/users', require('./users')(context));

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

const attachRoutes = (app, context) => {
  app.use('/', routes(context));
};

module.exports = attachRoutes;

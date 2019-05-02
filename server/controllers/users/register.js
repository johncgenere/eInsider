const _ = require('lodash');

const setup = (context) => {
  const user = context.models.user;
  const models = context.models;

  const logEndpoint = (req, res, next) => {
    console.log("You have hit [POST] /users/register endpoint");
    next();
  };

  const checkIfSessionExists = (req, res, next) => {
    if (!_.isEmpty(req.session.username)){
      console.log('cannot register with an existing session');
      return res
        .status(400)
        .send('cannot register with an existing session');
    }
    next();
  }

  const sanitizeParams = (req, res, next) => {
    if (_.isEmpty(req.body.username)) {
      console.log('cannot create user without username');
      return res
        .status(400)
        .send('cannot create user without username');
    }

    if (_.isEmpty(req.body.password)) {
      console.log('cannot create user without password');
      return res
        .status(400)
        .send('cannot create user without password');
    }

    req.clean = {
      username: req.body.username,
      password: req.body.password
    }

    next();
  }
  
  const findUser = (req, res, next) => {
    user.findOne({ 
      where: { 
        username: req.clean.username 
      } 
    })
      .then(user => {
        if (!_.isEmpty(user)) {
          throw new Error(`user with the username '${req.clean.username}' already exists`);
        }

        next();
      })
      .catch(err => {
        console.log(err.message);
        return res
          .status(400)
          .send(err.message)
      });
  };

  const createUser = (req, res, next) => {
    models.sequelize.query(`INSERT INTO "users" (username, password) VALUES ('${req.clean.username}', '${req.clean.password}');`)
    .then(() => {
      next();
    })
    .catch(err => {
      console.log(err.message);
      return res
          .status(400)
          .send(err.message)
    });
  }

  const sendResponse = (req, res, next) => {
    // Sets the session
    req.session.username = req.clean.username;
    req.session.lol = false;
    req.session.dota2 = false;
    req.session.csgo = false;
    req.session.ow = false;

    console.log('user inserted into the database!');

    res
    .status(201)
    .send('user inserted into the database!')
  }
  
  return [
    logEndpoint,
    checkIfSessionExists,
    sanitizeParams,
    findUser,
    createUser,
    sendResponse
  ];
};

module.exports = setup;
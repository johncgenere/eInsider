const _ = require('lodash');

const setup = (context) => {
  const user = context.models.user;
  const models = context.models;

  const logEndpoint = (req, res, next) => {
    console.log("You have hit [POST] /users/register endpoint");
    next();
  };

  const checkIfSessionExists = (req, res, next) => {
    if (!_.isEmpty(req.session.username) || !_.isEmpty(req.session.password)){
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
    models.sequelize.query(`INSERT INTO "users" (username, password) VALUES ('${req.body.username}', '${req.body.password}');`)
    .then(() => {
      console.log('user inserted into the database!');
      next();
    })
    .catch(err => {
      console.log(`user couldn't be inserted into the database because ${err.message}`);
    })
  }

  const sendResponse = (req, res, next) => {
    // Sets the session
    req.session.username = req.clean.username;
	  req.session.password = req.clean.password;
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
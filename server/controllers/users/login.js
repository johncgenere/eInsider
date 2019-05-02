const _ = require('lodash');

const setup = (context) => {
  const user = context.models.user;

  const logEndpoint = (req, res, next) => {
    console.log("You have hit [POST] /users/login endpoint");
    next();
  };

  const checkIfSessionExists = (req, res, next) => {
    if (!_.isEmpty(req.session.username) || !_.isEmpty(req.session.password)){
      console.log('cannot login with an already existing session');
      return res
        .status(400)
        .send('cannot login with an already existing session');
    }
    next();
  }
  
  const sanitizeParams = (req, res, next) => {
    if (_.isEmpty(req.body.username)) {
      console.log('cannot find user without username');
      return res
        .status(404)
        .send('cannot find user without username');
    }

    if (_.isEmpty(req.body.password)) {
      console.log('cannot find user without password');
      return res
        .status(404)
        .send('cannot find user without password');
    }

    req.clean = {
      username: req.body.username,
      password: req.body.password
    }
    
    next();
  }

  const checkIfUsernameExists = (req, res, next) => {
    user.findOne({ 
      where: { 
        username: req.clean.username,
      } 
    })
      .then(user => {
        if (_.isEmpty(user)) {
          throw new Error('user does not exist');
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

  const checkIfPasswordIsCorrect = (req, res, next) => {
    user.findOne({ 
      where: { 
        username: req.clean.username,
        password: req.clean.password
      } 
    })
      .then(user => {
        if (_.isEmpty(user)) {
          throw new Error('incorrect password');
        }

        req.clean.user = user;
        next();
      })
      .catch(err => {
        console.log(err.message);
        return res
          .status(400)
          .send(err.message)
      });
  };

  const sendResponse = (req, res, next) => {
    console.log("Sending back the following json:\n" + JSON.stringify(req.clean.user, null, 2));
    // Sets the session
    req.session.username = req.clean.username;
	  req.session.password = req.clean.password;
    res
    .status(200)
    .json(req.clean.user);
  };
  
  return [
    logEndpoint,
    checkIfSessionExists,
    sanitizeParams,
    checkIfUsernameExists,
    checkIfPasswordIsCorrect,
    sendResponse
  ];
};

module.exports = setup;
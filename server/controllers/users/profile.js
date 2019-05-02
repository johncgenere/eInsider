const _ = require('lodash');

const setup = (context) => {
  const user = context.models.user;

  const logEndpoint = (req, res, next) => {
    console.log("You have hit [GET] /users/profile endpoint");
    next();
  };
  
  const sanitizeParams = (req, res, next) => {
    if (_.isEmpty(req.body.username)) {
      return res
        .status(400)
        .send('cannot find desired username in req.body');
    }

    req.clean = {
      username: req.body.username
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
        if (_.isEmpty(user)) {
          throw new Error('user not found');
        }

        req.clean.user = user;
        next();
      })
      .catch(err => {
        return res
          .status(400)
          .send(`user not found with username: ${req.clean.username}\n`)
      });
  };

  const sendResponse = (req, res, next) => {
    console.log("Sending back the following json:\n" + JSON.stringify(user, null, 2));
    res
    .status(200)
    .json(req.clean.user);
  };
  
  return [
    logEndpoint,
    sanitizeParams,
    findUser,
    sendResponse
  ];
};

module.exports = setup;
const _ = require('lodash');

const setup = (context) => {

  const logEndpoint = (req, res, next) => {
    console.log("You have hit [GET] /users/profile endpoint");
    next();
  };

  const checkIfSessionExists = (req, res, next) => {
    if (_.isEmpty(req.session.username)){
      console.log('cannot view profile without existing session');
      return res
        .status(400)
        .send('cannot view profile without existing session');
    }
    next();
  }

  const sendResponse = (req, res, next) => {
    console.log("Sending back the following json:\n" + JSON.stringify(req.session, null, 2));
    res
    .status(200)
    .json(req.session);
  };
  
  return [
    logEndpoint,
    checkIfSessionExists,
    sendResponse
  ];
};

module.exports = setup;
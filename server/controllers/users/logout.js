const _ = require('lodash');

const setup = () => {  

  const logEndpoint = (req, res, next) => {
    console.log("You have hit [DELETE] /users/logout endpoint");
    next();
  };

  const checkIfSessionExists = (req, res, next) => {
    if (_.isEmpty(req.session.username) || _.isEmpty(req.session.password)){
      console.log('cannot logout without an existing session');
      return res
        .status(400)
        .send('cannot logout without an existing session');
    }
    next();
  }

  const sendResponse = (req, res, next) => {
    req.session.destroy(function(err) {
      if(err) {
        console.log(err);
      }
    });
    res
    .status(200)
    .send('session successfully removed');
  };
  
  return [
    logEndpoint,
    checkIfSessionExists,
    sendResponse
  ];
};

module.exports = setup;
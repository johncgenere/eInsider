const mockFantasyData = require('../mockFantasyData');

const setup = () => {

  const logEndpoint = (req, res, next) => {
    console.log("You have hit [GET] /fantasy endpoint");
    next();
  };

  const sendResponse = (req, res, next) => {
    console.log("Sending back the following json:\n" + JSON.stringify(mockFantasyData, null, 2));
    res
    .status(200)
    .json(mockFantasyData);
  };
  
  return [
    logEndpoint,
    sendResponse
  ];
};

module.exports = setup;
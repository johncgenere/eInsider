const fs = require('fs');

const setup = () => {

  let mockFantasyData = {};

  const logEndpoint = (req, res, next) => {
    console.log("You have hit [GET] /fantasy endpoint");
    next();
  };

  const readMockFantasyData = (req, res, next) => {
    mockFantasyData = fs.readFileSync('../mockFantasyData.json', 'utf-8');
    next();
  }

  const sendResponse = (req, res, next) => {
    console.log("Sending back the following json:\n" + JSON.stringify(mockFantasyData, null, 2));
    res
    .status(200)
    .json(mockFantasyData);
  };
  
  return [
    logEndpoint,
    readMockFantasyData,
    sendResponse
  ];
};

module.exports = setup;
const fs = require('fs');

const setup = () => {

  const printReq = (req, res, next) => {
    console.log("I HIT THE FANTASY BACKEND");
    next();
  };

  const sendResponse = (req, res, next) => {
    const content = fs.readFileSync('mockdatafantasy.json', 'utf-8');
    console.log(content, 'content')
    res
    .status(200)
    .json(content) 
  };
  
  return [
    printReq,
    sendResponse
  ];
};

module.exports = setup;
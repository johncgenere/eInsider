const setup = () => {
  const printReq = (req, res, next) => {
    console.log("I HIT THE FANTASY BACKEND");
    next();
  };

  const sendResponse = (req, res, next) => {
    res
    .status(200)
    .send('Welcome to fantasy leagues');
  };
  
  return [
    printReq,
    sendResponse
  ];
};

module.exports = setup;
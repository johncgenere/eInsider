const setup = () => {
  const printReq = (req, res, next) => {
    console.log("I HIT THE HOME/callofduty BACKEND");
    next();
  };

  const sendResponse = (req, res, next) => {
    res
    .status(200)
    .send('Welcome to callofduty stats');
  };
  
  return [
    printReq,
    sendResponse
  ];
};

module.exports = setup;
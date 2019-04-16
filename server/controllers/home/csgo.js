const setup = () => {
  const printReq = (req, res, next) => {
    console.log("I HIT THE HOME/csgo BACKEND");
    next();
  };

  const sendResponse = (req, res, next) => {
    res
    .status(200)
    .send('Welcome to csgo stats');
  };
  
  return [
    printReq,
    sendResponse
  ];
};

module.exports = setup;
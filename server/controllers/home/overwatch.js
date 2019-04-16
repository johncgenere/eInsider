const setup = () => {
  const printReq = (req, res, next) => {
    console.log("I HIT THE HOME/Overwatch BACKEND");
    next();
  };

  const sendResponse = (req, res, next) => {
    res
    .status(200)
    .send('Welcome to overwatch stats');
  };
  
  return [
    printReq,
    sendResponse
  ];
};

module.exports = setup;
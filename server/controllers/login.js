const setup = () => {
  const printReq = (req, res, next) => {
    console.log("I HIT THE LOGIN BACKEND");
    next();
  };

  const sendResponse = (req, res, next) => {
    res
    .status(200)
    .send('Welcome to login');
  };
  
  return [
    printReq,
    sendResponse
  ];
};

module.exports = setup;
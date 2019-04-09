const setup = () => {
  const printReq = (req, res, next) => {
    console.log("I HIT THE PROFILE BACKEND");
    next();
  };

  const sendResponse = (req, res, next) => {
    res
    .status(200)
    .send('Welcome to profile');
  };
  
  return [
    printReq,
    sendResponse
  ];
};

module.exports = setup;
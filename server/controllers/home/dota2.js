const setup = () => {
  const printReq = (req, res, next) => {
    console.log("I HIT THE HOME/dota2 BACKEND");
    next();
  };

  const sendResponse = (req, res, next) => {
    res
    .status(200)
    .send('Welcome to lol stats');
  };
  
  return [
    printReq,
    sendResponse
  ];
};

module.exports = setup;
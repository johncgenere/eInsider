const setup = () => {
  const printReq = (req, res, next) => {
    console.log("I HIT THE PROFILE BACKEND");
    next();
  };

  const sendResponse = (req, res, next) => {
    // console.log("req : " + JSON.stringify(req));
    console.log("req : " + req);
    console.alert("req : " + req);
    res
    .status(200)
    .send('Welcome to profile ' + req.playerName);
  };
  
  return [
    printReq,
    sendResponse
  ];
};

module.exports = setup;
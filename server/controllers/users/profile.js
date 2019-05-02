const setup = (context) => {
  const logEndpoint = (req, res, next) => {
    console.log("You have hit [GET] /users/profile endpoint");
    const user = context.models.user;
    user.findAll()
    .then((res) => {
      console.log(res);
    })
    next();
  };

  const sendResponse = (req, res, next) => {
    res
    .status(200)
    .send('Welcome to profile');
  };
  
  return [
    logEndpoint,
    sendResponse
  ];
};

module.exports = setup;
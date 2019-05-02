const setup = (context) => {
  const logEndpoint = (req, res, next) => {
    console.log("You have hit [POST] /users/register endpoint");
    console.log(JSON.stringify(req.body, null, 2));
    const models = context.models;
    models.sequelize.query(`INSERT INTO "users" (username, password) VALUES ('${req.body.username}', '${req.body.password}');`)
    .then((res) => {
      console.log(res);
    })
    next();
  };

  const sendResponse = (req, res, next) => {
    res
    .status(200)
    .send('Welcome to register');
  };
  
  return [
    logEndpoint,
    sendResponse
  ];
};

module.exports = setup;
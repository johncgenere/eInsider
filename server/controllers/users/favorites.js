const _ = require('lodash');

const setup = (context) => {
  const user = context.models.user;

  const logEndpoint = (req, res, next) => {
    console.log("You have hit [POST] /users/favorites endpoint");
    next();
  };

  const checkIfSessionExists = (req, res, next) => {
    if (_.isEmpty(req.session.username)){
      console.log('cannot change favorites without existing session');
      return res
        .status(400)
        .send('cannot change favorites without existing session');
    }
    next();
  }

  const updateFavorites = (req, res, next) => {
    if ("lol" in req.body) {
      req.session.lol = req.body.lol;

      user.update({
        lol: req.body.lol
      },
      {
        where: {
          username: req.session.username
        }
      })
      .catch(err => {
        console.log(err.message);
        return res
          .status(400)
          .send(err.message)
      });
    }

    if ("dota2" in req.body) {
      req.session.dota2 = req.body.dota2;

      user.update({
        dota2: req.body.dota2
      },
      {
        where: {
          username: req.session.username
        }
      })
      .catch(err => {
        console.log(err.message);
        return res
          .status(400)
          .send(err.message)
      });
    }

    if ("csgo" in req.body) {
      req.session.csgo = req.body.csgo;

      user.update({
        csgo: req.body.csgo
      },
      {
        where: {
          username: req.session.username
        }
      })
      .catch(err => {
        console.log(err.message);
        return res
          .status(400)
          .send(err.message)
      });
    }

    if ("ow" in req.body) {
      req.session.ow = req.body.ow;

      user.update({
        ow: req.body.ow
      },
      {
        where: {
          username: req.session.username
        }
      })
      .catch(err => {
        console.log(err.message);
        return res
          .status(400)
          .send(err.message)
      });
    }
    
    next();
  }

  const sendResponse = (req, res, next) => {
    console.log("Sending back the following message:\n" + "You've updated the favorites");
    res
    .status(200)
    .send("You've updated the favorites");
  };
  
  return [
    logEndpoint,
    checkIfSessionExists,
    updateFavorites,
    sendResponse
  ];
};

module.exports = setup;
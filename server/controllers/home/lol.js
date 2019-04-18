const request = require('superagent');

//Put this token in a separate file and git ignore it but for now WEEEEE
const token = 'K-vNqWhG9uYGlPgD-SunEJu9bLZNfw_uOBi_2rGPgIp7b56V5lM';

const setup = () => {

  const printReq = (req, res, next) => {
    console.log("I HIT THE HOME/lol BACKEND");
    next();
  };

  const accessPanda = (req, res, next) => {
    request
    .get(`api.pandascore.co/lol/tournaments/upcoming?token=${token}`)
    .set('Accept', 'application/json')
    .then(res => {
      for (let arr of res.body)
        console.log(`Tournament name: ${arr['serie'].full_name} -- ${arr['name']}\nFrom league: ${arr['league'].name}\nTorunament starts at: ${arr['begin_at']}\n`)
      next();
    })
    .catch(function(error) {
      console.log(`Failed to list league matches\n${error.message}`);
    });
  };

  const accessPandaTeamInfo = (req, res, next) => {
    request
    .get(`api.pandascore.co/lol/teams?token=${token}`) 
    .set('Accept', 'application/json')
    .then(res => {
      console.log('League of Legends Teams are:\n')
      for (let arr of res.body) 
        console.log(`${arr.name}\n`)
      next();
    })
    .catch(function(error) {
      console.log(`I failed under the Team Info function\n${error.message}`);
    });
  };

  const sendResponse = (req, res, next) => {
    res
    .status(200)
    .send('Welcome to lol stats');
  };
  
  return [
    printReq,
    accessPanda,
    accessPandaTeamInfo,
    sendResponse
  ];
};

module.exports = setup;

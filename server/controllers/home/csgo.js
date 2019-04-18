const request = require('superagent');

//Put this token in a separate file and git ignore it but for now WEEEEE
const token = 'K-vNqWhG9uYGlPgD-SunEJu9bLZNfw_uOBi_2rGPgIp7b56V5lM';

const setup = () => {
  
  const printReq = (req, res, next) => {
    console.log("I HIT THE HOME/csgo BACKEND");
    next();
  };

  /*
  NOTE:
  The idea with the following two functions is to have a Promise.All array that calls the two different panda API
  endpoints (one for tournaments and one for team info) at the same time (point of promises) and then we merge both results into a huge object to send back to the frontend. For now, I am printing the data we want in separate functions. -- The promise.all is an ongoing process. 
  */
  const accessPanda = (req, res, next) => {
    request
    .get(`api.pandascore.co/csgo/tournaments/upcoming?token=${token}`)
    .set('Accept', 'application/json')
    .then(res => {
      for (let arr of res.body) 
        console.log(`Tournament name: ${arr['serie'].full_name} -- ${arr['name']}\nFrom league: ${arr['league'].name}\nTournament starts at: ${arr['begin_at']}\n`)
      next();
    })
    .catch(function(error) {
      console.log(`Failed to list league matches\n${error.message}`);
    });
  };

  const accessPandaTeamInfo = (req, res, next) => {
    request
    .get(`api.pandascore.co/csgo/teams?token=${token}`) 
    .set('Accept', 'application/json')
    .then(res => {
      console.log('CS:GO Teams are:\n')
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
    .send('Welcome to csgo stats');
  };
  
  return [
    printReq,
    accessPanda,
    accessPandaTeamInfo,
    sendResponse 
  ];
};

module.exports = setup;

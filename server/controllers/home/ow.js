const request = require('superagent');

//Put this token in a separate file and git ignore it but for now WEEEEE
const token = 'K-vNqWhG9uYGlPgD-SunEJu9bLZNfw_uOBi_2rGPgIp7b56V5lM';

const setup = () => {

  let upcomingTournaments = []; 
  
  const logEndpoint = (req, res, next) => {
    console.log("You have hit [GET] /home/ow endpoint");
    next();
  };

  const getUpcomingTournaments = (req, res, next) => {
    request
    .get(`https://api.pandascore.co/ow/tournaments/upcoming?sort=begin_at&token=${token}`)
    .set('Accept', 'application/json')
    .then(res => {
      res.body.forEach(owTournament => {
        upcomingTournaments.push({
          game: "Overwatch",
          tournamentName: owTournament.name,
          startTime: owTournament.begin_at,
          endTime: owTournament.end_at,
          leagueName: owTournament.league.name,
          serieName: owTournament.serie.name
        });
      });
      next();
    })
    .catch(err => {
      console.log(`Failed get ow upcoming tournaments data ${err.message}`);
    });
  };

  const sendResponse = (req, res, next) => {
    console.log("Sending back the following json:\n" + JSON.stringify(upcomingTournaments, null, 2));
    res
    .status(200)
    .json(upcomingTournaments);
  };
  
  return [
    logEndpoint,
    getUpcomingTournaments, 
    sendResponse
  ];
};

module.exports = setup;
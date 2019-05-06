const request = require('superagent');
const config = require('../../../config.json')
const moment = require('moment');

const setup = () => {

  let upcomingTournaments = []; 
  
  const logEndpoint = (req, res, next) => {
    console.log("You have hit [GET] /home/csgo endpoint");
    next();
  };

  const getUpcomingTournaments = (req, res, next) => {
    request
    .get(`https://api.pandascore.co/csgo/tournaments/upcoming?sort=begin_at&token=${config.token}`)
    .set('Accept', 'application/json')
    .then(res => {
      res.body.forEach(csgoTournament => {
        upcomingTournaments.push({
          game: "Counter-Strike: Global Offensive",
          tournamentName: csgoTournament.name,
          startTime: moment(csgoTournament.begin_at).format('MM-DD-YYYY'),
          endTime: moment(csgoTournament.end_at).format('MM-DD-YYYY'),
          leagueName: csgoTournament.league.name,
          serieName: csgoTournament.serie.name
        });
      });
      next();
    })
    .catch(err => {
      console.log(`Failed get csgo upcoming tournaments data ${err.message}`);
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
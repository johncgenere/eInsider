const request = require('superagent');
const config = require('../../../config.json')
const moment = require('moment');
const _ = require('lodash');

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
          startTime: !_.isEmpty(csgoTournament.begin_at) ? moment(csgoTournament.begin_at).format('MM-DD-YYYY') : null,
          endTime: !_.isEmpty(csgoTournament.end_at) ? moment(csgoTournament.end_at).format('MM-DD-YYYY') : null,
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
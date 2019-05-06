const request = require('superagent');
const config = require('../../../config.json')
const moment = require('moment');
const _ = require('lodash');

const setup = () => {

  let upcomingTournaments = []; 
  
  const logEndpoint = (req, res, next) => {
    console.log("You have hit [GET] /home/dota2 endpoint");
    next();
  };

  const getUpcomingTournaments = (req, res, next) => {
    request
    .get(`https://api.pandascore.co/dota2/tournaments/upcoming?sort=begin_at&token=${config.token}`)
    .set('Accept', 'application/json')
    .then(res => {
      res.body.forEach(dota2Tournament => {
        upcomingTournaments.push({
          game: "Dota 2",
          tournamentName: dota2Tournament.name,
          startTime: !_.isEmpty(dota2Tournament.begin_at) ? moment(dota2Tournament.begin_at).format('MM-DD-YYYY') : null,
          endTime: !_.isEmpty(dota2Tournament.end_at) ? moment(dota2Tournament.end_at).format('MM-DD-YYYY') : null,
          leagueName: dota2Tournament.league.name,
          serieName: dota2Tournament.serie.name
        });
      });
      next();
    })
    .catch(err => {
      console.log(`Failed get dota2 upcoming tournaments data ${err.message}`);
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
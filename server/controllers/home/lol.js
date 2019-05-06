const request = require('superagent');
const config = require('../../../config.json')
const moment = require('moment');

const setup = () => {

  let upcomingTournaments = []; 
  
  const logEndpoint = (req, res, next) => {
    console.log("You have hit [GET] /home/lol endpoint");
    next();
  };

  const getUpcomingTournaments = (req, res, next) => {
    request
    .get(`https://api.pandascore.co/lol/tournaments/upcoming?sort=begin_at&token=${config.token}`)
    .set('Accept', 'application/json')
    .then(res => {
      res.body.forEach(lolTournament => {
        upcomingTournaments.push({
          game: "League of Legends",
          tournamentName: lolTournament.name,
          startTime: moment(lolTournament.begin_at).format('MM-DD-YYYY'),
          endTime: moment(lolTournament.end_at).format('MM-DD-YYYY'),
          leagueName: lolTournament.league.name,
          serieName: lolTournament.serie.name
        });
      });
      next();
    })
    .catch(err => {
      console.log(`Failed get lol upcoming tournaments data ${err.message}`);
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
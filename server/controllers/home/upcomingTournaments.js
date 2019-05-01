const request = require('superagent');
const config = require('../../../config.json');

const setup = () => {

  let upcomingTournaments = {}; 
  
  const logEndpoint = (req, res, next) => {
    console.log("You have hit [GET] /home endpoint");
    next();
  };

  const getNextUpcomingTournamentLol = (req, res, next) => {
    request
    .get(`https://api.pandascore.co/lol/tournaments/upcoming?sort=begin_at&token=${config.token}`)
    .set('Accept', 'application/json')
    .then(res => {
      upcomingTournaments["lol"] = {
        game: "League of Legends",
        tournamentName: res.body[0].name,
        startTime: res.body[0].begin_at,
        endTime: res.body[0].end_at,
        leagueName: res.body[0].league.name,
        serieName: res.body[0].serie.name
      };
      next();
    })
    .catch(err => {
      console.log(`Failed get lol upcoming tournament data ${err.message}`);
    });
  };

  const getNextUpcomingTournamentDota2 = (req, res, next) => {
    request
    .get(`https://api.pandascore.co/dota2/tournaments/upcoming?sort=begin_at&token=${config.token}`)
    .set('Accept', 'application/json')
    .then(res => {
      upcomingTournaments["dota2"] = {
        game: "Dota 2",
        tournamentName: res.body[0].name,
        startTime: res.body[0].begin_at,
        endTime: res.body[0].end_at,
        leagueName: res.body[0].league.name,
        serieName: res.body[0].serie.name
      };
      next();
    })
    .catch(err => {
      console.log(`Failed get dota2 upcoming tournament data ${err.message}`);
    });
  };

  const getNextUpcomingTournamentCSGO = (req, res, next) => {
    request
    .get(`https://api.pandascore.co/csgo/tournaments/upcoming?sort=begin_at&token=${config.token}`)
    .set('Accept', 'application/json')
    .then(res => {
      upcomingTournaments["csgo"] = {
        game: "Counter-Strike: Global Offensive",
        tournamentName: res.body[0].name,
        startTime: res.body[0].begin_at,
        endTime: res.body[0].end_at,
        leagueName: res.body[0].league.name,
        serieName: res.body[0].serie.name
      };
      next();
    })
    .catch(err => {
      console.log(`Failed get csgo upcoming tournament data ${err.message}`);
    });
  };

  const getNextUpcomingTournamentOW = (req, res, next) => {
    request
    .get(`https://api.pandascore.co/ow/tournaments/upcoming?sort=begin_at&token=${config.token}`)
    .set('Accept', 'application/json')
    .then(res => {
      upcomingTournaments["ow"] = {
        game: "Overwatch",
        tournamentName: res.body[0].name,
        startTime: res.body[0].begin_at,
        endTime: res.body[0].end_at,
        leagueName: res.body[0].league.name,
        serieName: res.body[0].serie.name
      };
      next();
    })
    .catch(err => {
      console.log(`Failed get ow upcoming tournament data ${err.message}`);
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
    getNextUpcomingTournamentLol,
    getNextUpcomingTournamentDota2,
    getNextUpcomingTournamentCSGO,
    getNextUpcomingTournamentOW, 
    sendResponse
  ];
};

module.exports = setup;
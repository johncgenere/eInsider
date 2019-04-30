const request = require('superagent');

//Put this token in a separate file and git ignore it but for now WEEEEE
const token = 'K-vNqWhG9uYGlPgD-SunEJu9bLZNfw_uOBi_2rGPgIp7b56V5lM';

const setup = () => {

  let upcomingTournaments = {}; 
  
  const logEndpoint = (req, res, next) => {
    console.log("You have hit [GET] /home endpoint");
    next();
  };

  const GetNextUpcomingTournamentLol = (req, res, next) => {
    request
    .get(`https://api.pandascore.co/lol/tournaments/upcoming?sort=begin_at&token=${token}`)
    .set('Accept', 'application/json')
    .then(res => { // stores data in an array about the next upcoming tournament for lol as an object. 
      upcomingTournaments = res.body[0];
      console.log(JSON.stringify(upcomingTournaments, null, 2));
      next();
    })
    .catch(function(error) {
      console.log(`Failed get lol upcoming tournament data ${error.message}`);
    });
  };

  /*const accessPanda = (req, res, next) => {
    request
    .get(`api.pandascore.co/ow/tournaments/upcoming?token=${token}`)
    .set('Accept', 'application/json')
    .then(res => {
      for (let arr of res.body)  // appending info to array that we're sending to front end
        objectData.push({ "Tournament_name": arr['serie'].full_name, "Detailed_name": arr['name'], "League": arr['league'].name, "Starts_at": arr['begin_at'] })
      next();
    })
    .catch(function(error) {
      console.log(`Failed to get OW upcoming tournaments\n${error.message}`);
    });
  };*/

  const sendResponse = (req, res, next) => {
    res
    .status(200);
    //.json(objectData);
  };
  
  return [
    logEndpoint,
    GetNextUpcomingTournamentLol,
    sendResponse
  ];
};

module.exports = setup;

/*const GetNextUpcomingTournamentCSGO = (req, res, next) => {
  request
  .get(`api.pandascore.co/csgo/tournaments/upcoming?token=${token}`)
  .set('Accept', 'application/json')
  .then(res => { // stores data in an array about the next upcoming tournament for csgo as an object. 
    objectData.push({ "Game": "CS:GO", "Tournament_name": res.body[0]['serie'].full_name, "Detailed_name": res.body[0]['name'], "League": res.body[0]['league'].name, "Starts_at": res.body[0]['begin_at'] })
    next();
  })
  .catch(function(error) {
    console.log(`Failed get csgo data under /routes/home\n${error.message}`);
  });
};

const GetNextUpcomingTournamentDota2 = (req, res, next) => {
  request
  .get(`api.pandascore.co/dota2/tournaments/upcoming?token=${token}`)
  .set('Accept', 'application/json')
  .then(res => { // stores data in an array about the next upcoming tournament for dota2 as an object. 
    objectData.push({ "Game": "Dota2", "Tournament_name": res.body[0]['serie'].full_name, "Detailed_name": res.body[0]['name'], "League": res.body[0]['league'].name, "Starts_at": res.body[0]['begin_at'] })
    next();
  })
  .catch(function(error) {
    console.log(`Failed get dota2 data under /routes/home\n${error.message}`);
  });
};



const GetNextUpcomingTournamentOW = (req, res, next) => {
  request
  .get(`api.pandascore.co/ow/tournaments/upcoming?token=${token}`)
  .set('Accept', 'application/json')
  .then(res => { // stores data in an array about the next upcoming tournament for ow as an object.
    objectData.push({ "Game": "Overwatch", "Tournament_name": res.body[0]['serie'].full_name, "Detailed_name": res.body[0]['name'], "League": res.body[0]['league'].name, "Starts_at": res.body[0]['begin_at'] })
    next();
  })
  .catch(function(error) {
    console.log(`Failed get OW data under /routes/home\n${error.message}`);
  });
};

return [
  GetNextUpcomingTournamentCSGO,
  GetNextUpcomingTournamentDota2,
  GetNextUpcomingTournamentLol,
  GetNextUpcomingTournamentOW, 
];*/
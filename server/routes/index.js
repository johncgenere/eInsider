const express = require('express');
const request = require('superagent');

//Put this token in a separate file and git ignore it but for now WEEEEE
const token = 'K-vNqWhG9uYGlPgD-SunEJu9bLZNfw_uOBi_2rGPgIp7b56V5lM';

const routes = () => {

  var objectData = []; // array that stores objects about the next upcoming tournament per game. 

  const app = express();
  
  app.use('/home', require('./home')());
  app.use('/fantasy', require('./fantasy')());
  app.use('/profile', require('./profile')());
  app.use('/login', require('./login')());
  app.use('/signup', require('./signup')());

  const printReq = (req, res, next) => {
    console.log("I HIT THE /index.js BACKEND");
    next();
  };

  const GetNextUpcomingTournamentCSGO = (req, res, next) => {
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

  const GetNextUpcomingTournamentLol = (req, res, next) => {
    request
    .get(`api.pandascore.co/lol/tournaments/upcoming?token=${token}`)
    .set('Accept', 'application/json')
    .then(res => { // stores data in an array about the next upcoming tournament for lol as an object. 
      objectData.push({ "Game": "LoL", "Tournament_name": res.body[0]['serie'].full_name, "Detailed_name": res.body[0]['name'], "League": res.body[0]['league'].name, "Starts_at": res.body[0]['begin_at'] })
      next();
    })
    .catch(function(error) {
      console.log(`Failed get lol data under /routes/home\n${error.message}`);
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

  app.use('/', (req, res, next) => {
    return res
      .status(200)
      .json(objectData);
  });
 
  return [
    printReq,
    GetNextUpcomingTournamentCSGO,
    GetNextUpcomingTournamentDota2,
    GetNextUpcomingTournamentLol,
    GetNextUpcomingTournamentOW, 
    app
  ];
};

const attachRoutes = app => {
  app.use('/', routes());
};

module.exports = attachRoutes;

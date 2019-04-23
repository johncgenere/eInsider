const request = require('superagent');

//Put this token in a separate file and git ignore it but for now WEEEEE
const token = 'K-vNqWhG9uYGlPgD-SunEJu9bLZNfw_uOBi_2rGPgIp7b56V5lM';

const setup = () => {

  var objectData = []; 
  
  const printReq = (req, res, next) => {
    console.log("I HIT THE HOME/csgo BACKEND");
    next();
  };

  const accessPanda = (req, res, next) => {
    request
    .get(`api.pandascore.co/csgo/tournaments/upcoming?token=${token}`)
    .set('Accept', 'application/json')
    .then(res => {
      for (let arr of res.body)  // appending info to array that we're sending to front end
        objectData.push({ "Tournament_name": arr['serie'].full_name, "Detailed_name": arr['name'], "League": arr['league'].name, "Starts_at": arr['begin_at'] })
      next();
    })
    .catch(function(error) {
      console.log(`Failed to get csgo upcoming tournaments\n${error.message}`);
    });
  };

  const sendResponse = (req, res, next) => {
    res
    .status(200)
    .json(objectData); // sending back our array with tournament info as json 
  };
  
  return [
    printReq,
    accessPanda,
    sendResponse 
  ];
};

module.exports = setup;

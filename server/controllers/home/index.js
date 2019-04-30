function setup() {
  return {
    upcomingTournaments: require('./upcomingTournaments')(),
    lol: require('./lol')(),
    dota2: require('./dota2')(),
    overwatch: require('./overwatch')(),
    csgo: require('./csgo')()
  };
}

module.exports = setup;
function setup() {
  return {
    upcomingTournaments: require('./upcomingTournaments')(),
    lol: require('./lol')(),
    dota2: require('./dota2')(),
    ow: require('./ow')(),
    csgo: require('./csgo')()
  };
}

module.exports = setup;
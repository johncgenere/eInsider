function setup() {
  return {
    lol: require('./lol')(),
    dota2: require('./dota2')(),
    overwatch: require('./overwatch')(),
    csgo: require('./csgo')(),
    callofduty: require('./callofduty')(),
    quake: require('./quake')()
  };
}

module.exports = setup;
function setup(context) {
  return {
    profile: require('./profile')(context),
    register: require('./register')(context),
    login: require('./login')(context),
    logout: require('./logout')(context)
  };
}

module.exports = setup;
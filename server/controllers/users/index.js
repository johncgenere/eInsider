function setup(context) {
  return {
    profile: require('./profile')(context),
    register: require('./register')(context),
    login: require('./login')(context),
    logout: require('./logout')(context),
    postFavorites: require('./postFavorites')(context)
  };
}

module.exports = setup;
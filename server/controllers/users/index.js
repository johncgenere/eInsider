function setup(context) {
  return {
    profile: require('./profile')(context),
    register: require('./register')(context)
  };
}

module.exports = setup;
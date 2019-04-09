//Might change this to pass a context object when we start using postgres
module.exports = {
  home: require('./home'),
  fantasy: require('./fantasy'),
  profile: require('./profile'),
  login: require('./login'),
  signup: require('./signup')
};

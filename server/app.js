const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const models = require('./database/models');

const port = process.env.PORT || 7000

const attachRoutes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({secret: 'eInsiderSession'}));

app.use(cookieParser());

const context = {
  models
};

app.context = context;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  next();
});

attachRoutes(app, context);

models.sequelize.sync()
  .then(() => console.log('Tables Synced'))
  .catch(err => console.error("Syncing did not occur because:",err));

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`)
});

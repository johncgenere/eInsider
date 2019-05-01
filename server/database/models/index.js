'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};
const config = require('../../../config.json')

/*
NOTE: Put your own database name under the config.json file. I will find a way to generalize it by tonight. -M.V 
*/

const url = process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : `postgres://${config.postgresUsername}@localhost:5432/einsider`;
const sequelize = new Sequelize(url);

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
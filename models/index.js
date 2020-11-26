const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const Sensing2= require('./sensing2')
const sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;
db.Sensing2 = Sensing2;
Sensing2.init(sequelize);

module.exports = db;

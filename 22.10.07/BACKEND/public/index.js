
const Sequelize = require('sequelize');
const config = require('../config');
const cors = require('cors');
const user = require('./user')

const sequelize = new Sequelize(config.dev.database, config.dev.username, config.dev.password, config.dev);

const db ={

};
db.sequelize = sequelize;
db.user = user;

// 테이블 생성 명령어
user.init(sequelize);

module.exports = db;
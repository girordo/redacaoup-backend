const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const School = require('../models/School');
const Student = require('../models/Student');
const Theme = require('../models/Theme');
const Essay = require('../models/Essay');

const connection = new Sequelize(dbConfig);

School.init(connection);
Student.init(connection);
Theme.init(connection);
Essay.init(connection);

School.associate(connection.models);
Student.associate(connection.models);
Theme.associate(connection.models);
Essay.associate(connection.models);

module.exports = connection;

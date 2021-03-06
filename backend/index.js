require = require('esm')(module);
const { sequelize } = require('./models');
module.exports = require('./server.js');

sequelize.sync();

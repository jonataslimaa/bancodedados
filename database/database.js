const Sequelize = require("sequelize");

const connection = new Sequelize('jonatas',
'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
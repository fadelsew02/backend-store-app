const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('tpstores', 'fadelsew', 'azerty', {
  host: 'localhost',
  dialect: 'postgres' 
});

module.exports = sequelize;


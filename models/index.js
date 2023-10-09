const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('tpstores', 'fadelsew', 'azerty', {
  host: 'localhost',
  dialect: 'postgres' 
});

module.exports = sequelize;

// const { Sequelize } = require('sequelize');

// // Récupérez les informations de connexion de Render
// const databaseUrl = process.env.DATABASE_URL; // Cela dépendra de ce que Render fournit

// // Utilisez l'URL de la base de données de Render pour la configuration
// const sequelize = new Sequelize(databaseUrl, {
//   dialect: 'postgres',
//     dialectOptions: {
//     ssl: true, // Désactive SSL/TLS
//   },
// });

// module.exports = sequelize;


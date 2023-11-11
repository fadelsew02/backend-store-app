
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Users = sequelize.define('Users', {
    owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    owner_name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    owner_surname: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    owner_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner_password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Users;

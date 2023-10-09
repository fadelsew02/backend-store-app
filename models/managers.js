
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Managers = sequelize.define('Managers', {
    manager_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    manager_firstname: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    manager_surname: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    manager_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    manager_username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    manager_password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    manager_phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    manager_photo: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Managers;

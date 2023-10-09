
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

// const Stores = require('./stores');

const Finances = sequelize.define('Finances', {
    finance_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    store_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Stores',
            key: 'store_id'
        }
    }, 
    capital: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    income: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    depenses: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    }
});

module.exports = Finances;




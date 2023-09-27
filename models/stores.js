
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

// const Managers = require('./managers');

const Stores = sequelize.define('Stores', {
    store_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    store_name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    manager_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Managers',
            key: 'manager_id'
        }
    },
    staff_count: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact_phone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Stores;

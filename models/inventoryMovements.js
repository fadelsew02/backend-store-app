
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

// const Stores = require('./stores');
// const Items = require('./items');

const InventoryMovements = sequelize.define('InventoryMovements', {
    movement_id: {
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
    item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Items',
            key: 'item_id'
        }
    },
    movement_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = InventoryMovements;

const { DataTypes } = require('sequelize');
const sequelize = require('./index');

// const Items = require('./items');
// const Orders = require('./orders');

const OrderDetail = sequelize.define('OrderDetail', {
    detail_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Orders',
            key: 'order_id'
        }
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
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price_per_item: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
});

module.exports = OrderDetail;

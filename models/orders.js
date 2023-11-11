
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Orders = sequelize.define('Orders', {
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    order_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Customers',
            key: 'customer_id'
        }
    },
    total_amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
});

module.exports = Orders;

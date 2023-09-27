
// items.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

// const Categories = require('./categorie');
// const Stores = require('./stores');

const Items = sequelize.define('Items', {
    item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    item_name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categories',
            key: 'category_id'
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
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    url_photo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stock_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Items;


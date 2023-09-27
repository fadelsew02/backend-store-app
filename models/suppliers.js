
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Suppliers = sequelize.define('Suppliers', {
    supplier_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    category_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categories',
            key: 'category_id'
        }
    },
    supplier_name: {
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

module.exports = Suppliers;

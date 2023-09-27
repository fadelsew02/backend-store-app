
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Categories = sequelize.define('Categories', {
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    description: {
        type: DataTypes.STRING
    }
});

module.exports = Categories;


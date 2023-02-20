const { DataTypes } = require('sequelize');
const sequelize = require('./../configs/db.config');

const dogs = sequelize.define("dogs", {
  name: DataTypes.TEXT,
  height_min: DataTypes.INTEGER,
  height_max: DataTypes.INTEGER,
  weight_min: DataTypes.INTEGER,
  weight_max: DataTypes.INTEGER,
  yearsOfLife: DataTypes.INTEGER
});

module.exports = dogs;

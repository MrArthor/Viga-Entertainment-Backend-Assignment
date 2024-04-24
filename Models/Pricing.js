const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
   host: 'localhost',
   dialect: 'postgres',
});
const Pricing = sequelize.define('Pricing', {
    organizationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    zone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    baseDistanceInKm: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    kmPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fixPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
 });
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
   host: 'localhost',
   dialect: 'postgres',
});

const Organization = sequelize.define('Organization', {
   id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true,
   },
   name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
});

// models/Organization.js
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

// models/Item.js
const Item = sequelize.define('Item', {
   id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true,
   },
   type: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   description: {
     type: DataTypes.STRING,
     allowNull: false,
   },
});

// models/Pricing.js
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

sequelize.sync({ force: true }).then(() => console.log('Database & tables created!'));

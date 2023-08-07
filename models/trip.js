// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Traveller = require('./traveller');
const Location = require('./location');


// Initialize Product model (table) by extending off Sequelize's Model class
class Trip extends Model {}

// set up fields and rules for Trip model
Trip.init(
  {
   
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
     traveller_amount: {
        type: DataTypes.INTEGER,
     },
     traveller_id:{
        type: DataTypes.INTEGER,
        references: {model: Traveller, key:'id'}
     },
     location_id:{
        type: DataTypes.INTEGER,
        references: {model: Location, key:'id'}
     },


    
    
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trip',
  }
);

module.exports = Trip;
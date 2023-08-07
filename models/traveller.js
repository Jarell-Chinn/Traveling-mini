// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');



// Initialize Product model (table) by extending off Sequelize's Model class
class Traveller extends Model {}

// set up fields and rules for Traveller model
Traveller.init(
  {
   
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     email: {
        type: DataTypes.STRING,
     }
  


    
    
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'traveller',
  }
);

module.exports = Traveller;
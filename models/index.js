const Traveller = require('./traveller');
const Location = require("./location");
const Trip = require('./trip');

Location.hasMany(Trip)
Trip.belongsTo(Location)

Traveller.hasMany(Trip)
Trip.belongsTo(Traveller)



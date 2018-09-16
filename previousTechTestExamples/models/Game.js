const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/*
----------
Massive Entertainment
----------
The api called for a Game entity.

The Game entity has an array of associated points from the numerous clients.

The cleanest way to develop the api was with a child schema of pointSchema, this allows
developers to more readily utilize the mongoose/mongodb while interacting with child documents.

*/
const pointSchema = new Schema({
   point: Number}
);

// Create Schema
const gameSchema = new Schema({
  teamName: {type: String, default: "mckinnon"},
  points: [pointSchema],
  totalPoints: {type: Number, default: 0}
});

module.exports = Game = mongoose.model('game', gameSchema);

module.exports = {
  Games: mongoose.model('game', gameSchema),
  Point:  mongoose.model('point', pointSchema)
}


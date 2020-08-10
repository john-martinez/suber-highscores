const mongoose = require('mongoose');

// create traits schema
const highScoreSchema = new mongoose.Schema({
  playerName: {
    type: String, 
    required: true
  },
  playerScore: {
    type: Number,
    required: true
  }
});
//create traits model
const HighScore = mongoose.model('HighScore', highScoreSchema);

module.exports = HighScore;
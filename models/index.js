const mongoose = require('mongoose');
//const dotenv = require('dotenv').config();
mongoose.Promise = Promise;
mongoose.set("debug", true);


// connect to the database  
mongoose.connect(process.env.DB_URI);

module.exports.HighScore = require('./highScores');
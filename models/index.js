const mongoose = require('mongoose');
//const dotenv = require('dotenv').config();
mongoose.Promise = Promise;
mongoose.set("debug", true);


// connect to the database  
mongoose.connect("mongodb://admin:4r4yk0bH3!@ds151433.mlab.com:51433/suber");

module.exports.HighScore = require('./highScores');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const HighScore = require('./routes/highScores')
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use("/api/highscore", HighScore);


app.listen(PORT, ()=> `listening to port ${PORT}`);
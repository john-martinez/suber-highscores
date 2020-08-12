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

app.listen(PORT, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
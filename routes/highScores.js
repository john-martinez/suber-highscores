const express = require('express');
const router = express.Router();
const helpers = require('../helpers/highScores');

router.route('/')
	.get(helpers.showHighScores)
	.post(helpers.addHighScore)

router.route('/:id')
	.get(helpers.showHighScore)
	.put(helpers.editHighScore)
	.delete(helpers.deleteHighScore)

module.exports = router;
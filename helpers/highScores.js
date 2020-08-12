const app = require('express')();
const db = require('../models');

// return all highscores
exports.showHighScores = (req,res)=>{
	db.HighScore.find().sort({ playerScore: -1 })
	.then(data=>res.send(data))
	.catch(err=>res.send(err))
}

// create new HighScore
exports.addHighScore = (req,res)=>{
  console.log(req.body)
	db.HighScore.create(req.body)
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
};

// return one HighScore
exports.showHighScore = (req,res)=>{
	db.HighScore.find({_id: req.params.id})
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
};

// update one HighScore
exports.editHighScore = (req,res)=>{
	db.HighScore.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
};


// remove one HighScore
exports.deleteHighScore = (req,res)=>{
	db.HighScore.findOneAndDelete({_id: req.params.id})
	.then(()=>res.json({message: 'HighScore Deleted!'}))
	.catch(err=>res.send(err))
}


module.exports = exports;
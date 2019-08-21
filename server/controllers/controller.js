const {Cake, Comment} = require("../models/model");

exports.index = function(req, res){
  console.log("*********** IN INDEX")
  Cake.find()
  .then(cakes => res.json(cakes))
  .catch(err => res.json(err));
}

exports.create = function(req, res){
  Cake.create(req.body)
  .then(cake => res.json(cake))
  .catch(err => res.json(err));
}
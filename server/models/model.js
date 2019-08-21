const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema(
  {
    comment: String,
    rating: Number, 
  }, 
  { timestamps: true}
);

const CakeSchema = new mongoose.Schema(
  {
    name: String,
    img: String, //Image??
    commments: [CommentSchema]
  }, 
  { timestamps: true}
);

const Cake = mongoose.model("Cake", CakeSchema);
const Comment = mongoose.model("Comment", CommentSchema);

module.exports = {Cake, Comment}
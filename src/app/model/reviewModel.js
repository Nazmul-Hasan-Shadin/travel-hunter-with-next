const mongoose = require("mongoose");
console.log("connecting");
mongoose.connect(process.env.DB_URI);
mongoose.Promise = global.Promise;
console.log("connecterd");

const reviewSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  star: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const reviewModel =
  mongoose.models.clienReview || mongoose.model("clienReview", reviewSchema);

module.exports = reviewModel;

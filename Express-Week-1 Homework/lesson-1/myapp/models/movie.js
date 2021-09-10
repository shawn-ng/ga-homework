import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const commentsSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      maxlength: 300,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
  },
  {
    timestamps: true, // each comment set into database will have a time stamp on them
  }
);

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  release: Number,
  comments: [commentsSchema],
});

movieSchema.plugin(mongooseUniqueValidator);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;

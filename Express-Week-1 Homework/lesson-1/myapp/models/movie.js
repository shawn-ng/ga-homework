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
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true, // each comment set into database will have a time stamp on them
  }
);

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  release: Number,
  comments: [commentsSchema],
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  actors: [{ type: mongoose.Types.ObjectId, ref: "Actor" }],
});

movieSchema.plugin(mongooseUniqueValidator);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;

import Movie from "../models/movie.js";

export const createComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    const newComment = req.body;

    movie.comments.push(newComment);

    // this is to save the data to database cause
    const saveMovie = await movie.save();

    return res.status(201).json(saveMovie);
  } catch (err) {
    next(err);
  }
};

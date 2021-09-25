import Movie from "../models/movie.js";

export const createComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    const newComment = { ...req.body, createdBy: req.currentUser };

    movie.comments.push(newComment);

    // this is to save the data to database cause

    await movie.save();

    return res.status(201).json(movie);
  } catch (err) {
    next(err);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const { id, commentId } = req.params;

    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).send({
        msg: "Movie not found",
      });
    }

    const comment = movie.comments.id(commentId);
    if (!comment) {
      return res.status(404).send({
        msg: "Comments not found",
      });
    }

    if (!comment.createdBy.equals(req.currentUser)) {
      return res.status(401).send({ msg: "Unauthorized" });
    }

    comment.remove();

    const saveMovie = await movie.save();
    return res.status(200).send(saveMovie);
  } catch (err) {
    next(err);
  }
};

export const updateComment = async (req, res, next) => {
  try {
    const { id, commentId } = req.params;

    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).send({
        msg: "Movie not found",
      });
    }

    const comment = movie.comments.id(commentId);
    if (!comment) {
      return res.status(404).send({
        msg: "Comments not found",
      });
    }

    if (!comment.createdBy.equals(req.currentUser)) {
      return res.status(401).send({ msg: "Unauthorized" });
    }

    comment.set(req.body);

    const saveMovie = await movie.save();
    return res.status(200).send(saveMovie);
  } catch (err) {
    next(err);
  }
};

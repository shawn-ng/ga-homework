import Movie from "../models/movie.js";
import Actor from "../models/actor.js";
import removeAdded from "./helpers.js";
// getAllMovie
export const getAllMovie = async (req, res, next) => {
  const movies = await Movie.find();
  res.status(200).json(movies);
  next();
};

// adding new movie
export const createMovie = async (req, res, next) => {
  try {
    // creating new movie data and it will create it in data base
    console.log(req.currentUser);
    const newMovie = await Movie.create({
      ...req.body,
      createdBy: req.currentUser,
    });
    return res.status(201).json(newMovie);
  } catch (err) {
    // console.log("Something wrong with creating new data :" + err);
    next(err);
  }
};

// getting specific movie
export const getMovie = async (req, res, next) => {
  const id = req.params.id;

  try {
    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).send({
        msg: "movie not found",
      });
    }

    return res.status(201).json(movie);
  } catch (err) {
    next(err);
  }
};

export const deleteMovie = async (req, res, next) => {
  const id = req.params.id;

  try {
    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ msg: "movie doesn't exist" });
    }

    // this is mongoose way of checking the authentication
    if (!movie.createdBy.equals(req.currentUser)) {
      return res.status(401).send({ msg: "Unauthorized" });
    }

    const actorsToRemove = movie.actors.map((actor) => actor.toString());

    await Actor.updateMany(
      { _id: actorsToRemove },
      { $pull: { movies: movie._id } }
    );

    await movie.remove();

    return res.status(200).json(savedMovie);
  } catch (err) {
    next(err);
  }
};

export const updateMovie = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).send({ msg: "No movie found" });
    }

    if (!movie.createdBy.equals(req.currentUser)) {
      return res.status(401).send({ msg: "Unauthorized" });
    }

    const [removedActors, addedActors] = removeAdded(
      movie.actors.map((actor) => actor.toString()),
      req.body.actors
    );

    movie.set(req.body);

    const savedMovie = movie.save();

    await Actor.updateMany(
      { _id: removedActors },
      { $pull: { movies: savedMovie._id } }
    );

    await Actor.updateMany(
      { _id: addedActors },
      { $push: { movies: savedMovie._id } }
    );

    return res.status(200).json(movie);
  } catch (err) {
    next(err);
  }
};

import Movie from "../models/movie.js";

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
    const newMovie = await Movie.create(req.body);

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

    return res.status(201).json(movie);
  } catch (err) {
    next(err);
  }
};

export const deleteMovie = async (req, res, next) => {
  const id = req.params.id;

  try {
    const movie = await Movie.findByIdAndDelete(id);

    return res.status(201).json(movie);
  } catch (err) {
    next(err);
  }
};

export const updateMovie = async (req, res, next) => {
  try {
    const id = req.params.id;
    const movie = await Movie.findByIdAndUpdate(id, req.body);

    return res.status(201).json(movie);
  } catch (err) {
    next(err);
  }
};

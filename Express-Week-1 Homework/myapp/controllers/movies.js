import { movies } from "../lib/list_of_movies.js";

// getting specific movie and all movie
export const getMovie = (req, res) => {
  if (req.params.movieName) {
    const Movie = movies.find((movie) => {
      return movie.name.toLowerCase() === req.params.movieName.toLowerCase();
    });
    if (Movie) {
      res.send(Movie);
    } else {
      res.sendStatus(404);
    }
  } else {
    res.send(movies);
  }
};

// adding movie
/*
raw body {
    'name': 'e.g Avengers'
    'description': 'this is a movie with a gang of people fighting monster'
}
*/
export const addingMovie = (req, res) => {
  // This section is to have the correct form format
  const lastIndex = movies[movies.length - 1].id;
  const newMovieDict = {
    id: lastIndex + 1,
    name: req.body.name,
    description: req.body.description,
  };

  // This section is to check whether is there movie name repeated
  const Movie = movies.find((movie) => {
    return movie.name.toLowerCase() === newMovieDict.name.toLowerCase();
  });

  if (Movie) {
    res.send("The movie alread exist in the database: " + req.body.name);
  } else {
    movies.push(newMovieDict);
    res.sendStatus(200);
  }
};

// delete specific moovies
export const deleteMovie = (req, res) => {
  let index = null;
  movies.filter((movie) => {
    if (movie.name.toLowerCase() === req.params.movieName.toLowerCase()) {
      index = movie.id;
    }
    return null;
  });

  movies.splice(index, index + 1);

  res.sendStatus(200);
};

// editing specific movies
/* 
raw body {
    name: 'e.g Avenger',
    description: 'This is about super heroes protecting earth',
}
*/
export const editMovie = (req, res) => {
  const movie = req.body.name;
  const description = req.body.description;
  let index = null;

  movies.find((dict) => {
    if (dict.name.toLowerCase() === movie.toLowerCase()) {
      index = dict.id;
    }
    return null;
  });

  const editDict = movies[index];

  // codition to check the difference between the description
  if (editDict.description !== description) {
    movies[index].description = description;
  }

  res.sendStatus(200);
};

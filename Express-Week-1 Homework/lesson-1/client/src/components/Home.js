import React from "react";
import { getAllMovies, searchForMovies } from "../api/movies.js";

const Home = () => {
  const [Movies, setMovies] = React.useState([]);
  const [visibleRelease, setVisibleRelease] = React.useState("All");
  const [searchText, setSearchText] = React.useState({
    text: "",
  });
  const [searchResult, setSearchResult] = React.useState(null);

  React.useEffect(() => {
    getAllMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  // this split the the movies with the release date
  /* output : 
    {
      2020: [{...},{...}],
      2021: [{...}]
    }
  */

  const movieByRelease = Movies.reduce((dictionary, currentMovie) => {
    if (!dictionary[currentMovie.release]) {
      dictionary[currentMovie.release] = [];
    }

    dictionary[currentMovie.release].push(currentMovie);
    return dictionary;
  }, {});

  const handleClick = (e) => {
    setSearchResult(null);
    setVisibleRelease(null);
    setVisibleRelease(e.target.className);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const search = await searchForMovies(searchText.text);

      setSearchResult(search);
      setVisibleRelease(null);
      setSearchText({
        text: "",
      });
      setVisibleRelease(e.target.className);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setSearchText({
      ...searchText,
      text: e.target.value,
    });
  };
  return (
    <>
      <h1 className="title">Movies</h1>
      {Object.keys(movieByRelease).map((butt) => {
        return (
          <div key={butt + "button"}>
            <button onClick={handleClick} className={butt}>
              {butt}
            </button>
          </div>
        );
      })}
      <div>
        <button onClick={handleClick} className="All">
          All
        </button>
      </div>
      <form>
        <input
          type="search"
          placeholder="e.g Spider Man"
          onChange={handleChange}
          value={searchText.text}
        />
        <input
          type="button"
          value="Search"
          onClick={handleSearch}
          className="search"
        />
      </form>
      {searchResult
        ? searchResult.map((movie) => {
            return (
              <div className="movieCard" key={movie._id}>
                <h2>Title:</h2>
                <p>{movie.title}</p>
                <p>
                  Release:
                  <br />
                  {movie.release}
                </p>
                <p>
                  Description: <br />
                  {movie.description}
                </p>
              </div>
            );
          })
        : Object.entries(movieByRelease)
            .filter(([release, _movieList]) => {
              if (visibleRelease === "All") {
                return release;
              }
              return release === visibleRelease;
            })
            .map(([release, movieList]) => {
              return (
                <div key={release + "_"}>
                  <h2>{release}</h2>
                  {movieList.map((movie) => {
                    return (
                      <div className="movieCard" key={movie._id}>
                        <h2>Title:</h2>
                        <p>{movie.title}</p>
                        <p>
                          Release:
                          <br />
                          {movie.release}
                        </p>
                        <p>
                          Description: <br />
                          {movie.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
    </>
  );
};

export default Home;

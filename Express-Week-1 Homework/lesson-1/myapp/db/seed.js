import Movie from "../models/movie.js";
import { connectDb, truncateDb, disconnectDb } from "./helpers.js";
import { movieSeedData } from "./moviesSeedData.js";

async function seed() {
  try {
    await connectDb();
    console.log("Connected to Database");

    await truncateDb();
    console.log("Database dropped");

    const movies = await Movie.create(movieSeedData);
    console.log(`${movies.length} movies added to the database`);

    console.log("Good Bye");
  } catch (err) {
    console.log("Something went wrong with database");
  }

  disconnectDb();
}

seed();

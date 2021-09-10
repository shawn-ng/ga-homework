import express from "express";
import {
  getMovie,
  addingMovie,
  deleteMovie,
  editMovie,
  getAllMovie,
} from "../controllers/movies.js";

const router = express.Router();

// get all data
router.route("/movies").get(getAllMovie);

// getting the name of the movie
router.route("/movie/:movieName").get(getMovie);

// adding movie to the list
router.route("/movie").post(addingMovie);

// delete movie
router.route("/movie/:movieName?/:movieid?").delete(deleteMovie);

// edit movie
router.route("/movie/:movieName?/:movieid?").put(editMovie);

export default router;

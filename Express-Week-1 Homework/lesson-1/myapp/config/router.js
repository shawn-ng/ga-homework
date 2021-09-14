import express from "express";
import { createComment } from "../controllers/comments.js";
import {
  getMovie,
  getAllMovie,
  createMovie,
  deleteMovie,
  updateMovie,
} from "../controllers/movies.js";

const router = express.Router();

// get all data
router.route("/movies").get(getAllMovie);

// create movie
router.route("/movies").post(createMovie);

// get specific movie
router.route("/movies/:id").get(getMovie).delete(deleteMovie).put(updateMovie);

router.route("/movies/:id/comments").post(createComment);
export default router;

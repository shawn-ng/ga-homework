import express from "express";
import actorsController from "../controllers/actorsController.js";
import {
  createComment,
  deleteComment,
  updateComment,
} from "../controllers/comments.js";
import {
  getMovie,
  getAllMovie,
  createMovie,
  deleteMovie,
  updateMovie,
} from "../controllers/movies.js";
import userController from "../controllers/userController.js";
import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();

// get all data
router.route("/movies").get(getAllMovie);

// create movie
router.route("/movies").post(secureRoute, createMovie);

// get specific movie
router.route("/movies/:id").get(getMovie).delete(deleteMovie).put(updateMovie);

router.route("/movies/:id/comments").post(secureRoute, createComment);

router
  .route("/movies/:id/comments/:commentId")
  .delete(secureRoute, deleteComment)
  .put(secureRoute, updateComment);

// This is the actor section
router
  .route("/actors")
  .get(actorsController.getAllActors)
  .post(actorsController.createActor);

router
  .route("/actors/:id")
  .get(actorsController.getActor)
  .put(actorsController.updateActor);

router.route("/register").post(userController.registerUser);

router.route("/login").post(userController.loginUser);

export default router;

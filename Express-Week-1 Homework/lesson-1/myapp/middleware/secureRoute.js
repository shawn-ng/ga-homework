import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { secret } from "../config/environment.js";

// make sure user request have a valid token

const secureRoute = async (req, res, next) => {
  try {
    // get the token from the headers
    const authToken = req.headers.authorization;

    // if there is no token or the string doesnt start with Bearer
    if (!authToken || !authToken.startsWith("Bearer")) {
      return res
        .status(401)
        .send({ msg: "You are not authorized for perform this action" });
    }

    // strip the Bearer part of the token out as it doesnt hold any data
    const token = authToken.replace("Bearer ", "");

    // try to extract the data on the token using the secret. also handle error
    jwt.verify(token, secret, async (err, data) => {
      if (err) {
        return res.status(401).send({ msg: "Unauthorized" });
      }

      // fing the user by is using the id on the token
      const user = await User.findById(data.userId);

      console.log(user);

      if (!user) {
        return res.status(404).send({ msg: "User not found" });
      }

      //OBJECT LEVEL PERMISSIONS
      req.currentUser = user;

      next();
    });
  } catch (err) {
    return res.status(401).send({ msg: "Unauthorized" });
  }
};

export default secureRoute;

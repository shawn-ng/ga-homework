import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { secret } from "../config/environment.js";

const registerUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).send({ msg: "User not found" });
    }

    if (!user.validatePassword(req.body.password)) {
      return res.status(401).send({ msg: "Unauthorized" });
    }

    const token = jwt.sign(
      { userId: user._id }, // information we want to store in the token
      secret,
      { expiresIn: "12h" }
    );

    return res.status(202).send({ token, msg: "Login Successful" });
  } catch (err) {
    next(err);
  }
};

export default {
  registerUser,
  loginUser,
};

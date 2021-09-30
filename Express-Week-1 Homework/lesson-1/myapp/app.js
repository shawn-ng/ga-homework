import express from "express";
import { connectDb } from "./db/helpers.js";
import router from "./config/router.js";
import dotenv from "dotenv";
// cors are used to make sure have our api to accept api from anywhere, this is because we are using microservice
import cors from "cors";

// allow to access the node env
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

// app.get("/", (req, res) => {
//   res.send("This Api request work");
// });

// app.listen(port, () => console.log("listening on port" + port));

async function startServer() {
  try {
    await connectDb();
    console.log("Mongonese Connected");
    app.listen(process.env.PORT, () => {
      console.log("Movies API listening :" + process.env.PORT);
    });
  } catch (err) {
    console.log(
      "ERROR: something went wrong connecting to the database: ",
      err
    );
  }
}

startServer();

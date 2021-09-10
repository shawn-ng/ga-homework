import express from "express";
import { connectDb } from "./db/helpers.js";
import router from "./config/router.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/things", router);

// app.get("/", (req, res) => {
//   res.send("This Api request work");
// });

// app.listen(port, () => console.log("listening on port" + port));

async function startServer() {
  try {
    await connectDb();
    console.log("Mongonese Connected");
    app.listen(port, () => {
      console.log("Movies API listening");
    });
  } catch (err) {
    console.log("ERROR: something went wrong connecting to the database", err);
  }
}

startServer();

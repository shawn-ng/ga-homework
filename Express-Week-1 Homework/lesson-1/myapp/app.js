import express from "express";
import router from "./routes/router.js";

const app = express();
const port = 3000;
// const router = require("./router.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/things", router);

app.get("/", (req, res) => {
  res.send("This Api request work");
});

app.listen(port, () => console.log("listening on port" + port));

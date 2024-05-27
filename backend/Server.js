const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/ToDoRoute");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`Connected to Mongodb...`))
  .catch((err) => console.log(err));

app.use(routes);

app.get("/new", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Listening on: ${PORT}`);
});

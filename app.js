const express = require("express");
const cors = require("cors");
const app = express();
const ToDos = require("./models/ToDos");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(`${process.env.MONGO_DB_API_KEY}`);

app.use(cors());
app.use(express.json());

app.get("/todos", async (req, res) => {
  const toDos = await ToDos.find();
  res.json({ toDos: toDos });
});

app.post("/newitem", async (req, res) => {
  await ToDos.create(req.body);
});

app.post("/edititem/:id", async (req, res) => {
  await ToDos.findOneAndUpdate({ id: req.params.id }, req.body);
});

app.delete("/deleteitem/:id", async (req, res) => {
  await ToDos.deleteOne({ id: req.params.id });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

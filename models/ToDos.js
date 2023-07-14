const mongoose = require("mongoose");
const { Schema } = mongoose;

const toDoSchema = new Schema({
  id: Number,
  text: String,
  completed: Boolean,
});

module.exports = mongoose.model("ToDos", toDoSchema);

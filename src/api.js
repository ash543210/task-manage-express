const express = require("express");
const mongoose = require("mongoose");
const tasksRoutes = require("./routes/task.js");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://ash54321:taGpWfeSyhuXfFgW@cluster0.si5umyq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"));

app.use("/", tasksRoutes);

app.listen(3001);

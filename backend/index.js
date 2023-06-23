const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://arjitsingh2797:mtzZFf23fF8fIHVu@cluster0.gnti7qz.mongodb.net/password-testing?retryWrites=true&w=majority";
const app = express();
const routes = require("./routes/index");
app.use(cors());
app.use(express.json());

mongoose
  .connect(uri)
  .then(() => console.log("Mongodb connected successfully"))
  .catch((e) => console.log(e));

app.use(routes);

app.listen(4000, () => console.log("Running on Port 4000"));

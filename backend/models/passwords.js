const mongoose = require("mongoose");

const passwordSchema = new mongoose.Schema({
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Passwords", passwordSchema);

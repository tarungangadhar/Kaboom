const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    emailId: { type: String, required: true, unique:true},
    pass: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;

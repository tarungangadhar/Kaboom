const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    room: { type: String, required: true },
    message: { type: String, required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = mongoose.model("messages", messageSchema);

module.exports = Message;

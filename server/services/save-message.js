let axios = require("axios");
const Message = require('../models/messages');

function saveMessage(message, username, room, createdAt) {
  console.log("saving messages", {message, username, room})
  return new Promise((resolve, reject) => {
    const msg = new Message({message, username, room, createdAt});
    msg.save((err, ack) => {
      if (err) {
        reject(err);
      }
      return resolve(ack);
    });
  });
}

module.exports = saveMessage;

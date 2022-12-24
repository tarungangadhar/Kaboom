let axios = require('axios');
const Message = require('../models/messages');

function getMessages(room) {
  return new Promise((resolve, reject) => {
    Message.find({"room": room})
    .sort({"createdAt": 1})
    .limit(100)
    .then((data) => {
      return resolve(data);
    })
    .catch(err => reject(err));
  });
}

module.exports = getMessages;
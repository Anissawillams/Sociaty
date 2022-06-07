const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    type: String,
  sender: Object,
  socketid: String,
  time: String,
  date: String,
  receiver: String

})

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message
const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
  otheruser: {
    type: String,
  },

});

module.exports = mongoose.model('event', EventSchema);
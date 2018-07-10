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
});

module.exports = mongoose.model('event', EventSchema);
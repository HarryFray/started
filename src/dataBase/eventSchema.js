const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
  date: {
    type: Date,
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

const Event = mongoose.model('event', EventSchema);
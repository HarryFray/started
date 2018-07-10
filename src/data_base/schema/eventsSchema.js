const mongoose = require('mongoose');

const EventsSchema = mongoose.Schema({
  events: [{
    type: String,
    ref: 'event',
  }],
});

module.exports = mongoose.model('event', EventsSchema);
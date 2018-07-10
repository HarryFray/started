const mongoose = require('mongoose');

const EventsSchema = mongoose.Schema({
  events: [{
    type: Schema.Types.ObjectId,
    ref: 'event',
  }],
});

const Event = mongoose.model('event', EventsSchema);
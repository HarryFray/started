const Event = require('./schema/eventSchema');
const mongoose = require('mongoose');

module.exports.insertEvent = (event) => {
  return new Event(event).save();
};

module.exports.deleteEvents = () => {
  return Event.remove({});
};

module.exports.retrieveEventsInDateRange = () => {
  return Event.find({});
};

module.exports.sumarizeEventsInDateRange = () => {
  return Event.find({});
};
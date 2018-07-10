const Event = require('./schema/eventSchema');
const mongoose = require('mongoose');


module.exports.insertEvent = (event) => {
  return new Event(event)
    .save()
};

module.exports.deleteEvents = () => {
  console.log('deleted events')
}

module.exports.retrieveEvents = () => {
  console.log('retrive events')
}

module.exports.sumarizeEvents = () => {
  console.log('sumarized events')
}
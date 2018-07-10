const express = require('express');
const bodyParser = require('body-parser');
const mongoQuery = require('../data_base/mongoDB_query')
const dataBase = require('../data_base');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

const eventsRouter = express.Router();
app.use('/events', eventsRouter);

// submit event
eventsRouter.post('/', (req, res) => {
  mongoQuery.insertEvent(req.body)
    .then(() => res.json({ "status": "ok" }))
    .catch(() => res.sendStatus(400));
})

// clear data
eventsRouter.post('/clear', (req, res) => {
  mongoQuery.deleteEvents()
    .then(() => res.json({ "status": "ok" }))
    .catch(() => res.status(400));
})

// list events
eventsRouter.get('/?from=DATE&to=DATE', (req, res) => {
  let { from, to } = req.params;
  mongoQuery.retrieveEventsInDateRange(from, to)
    .then(events => res.json({ events: events }))
    .catch(() => res.status(400));
})

// event summary
eventsRouter.get('/summary?from=DATE&to=DATE&by=TIMEFRAME', (req, res) => {
  let = { from, to, timeFrame } = req.params
  mongoQuery.sumarizeEventsInDateRange(from, to, timeFrame)
    .then(events => res.json({ events: events }))
    .catch(() => res.status(400));
})

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
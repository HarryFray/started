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
    .then(res => {
      res.status(200)
    })
    .catch(err => {
      res.status(400);
    });
})

// clear data
eventsRouter.post('/clear', (req, res) => {
  mongoQuery.deleteEvents();
})

// list events
eventsRouter.get('/', (req, res) => {
  mongoQuery.retrieveEvents();
})

// event summary
eventsRouter.get('/', (req, res) => {
  mongoQuery.sumarizeEvents();
})


const port = 8080;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
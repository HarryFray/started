const express = require('express');
const bodyParser = require('body-parser');

const dataBase = require('../dataBase');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));


const eventsRouter = express.Router();
app.use('/events', eventsRouter);


// submit events
eventsRouter.post('/', (req, res) => res.json({ events: true }))

// clear data
eventsRouter.post('/clear', (req, res) => res.json({ events: true }))

// list events
eventsRouter.get('/', (req, res) => res.json({ events: true }))

// event summary
eventsRouter.get('/', (req, res) => res.json({ events: true }))



const port = 8080;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
const express = require('express');

const app = express();


const eventsRouter = express.Router();
app.use('/events', eventsRouter);


eventsRouter.get('/', (req, res) => res.send('test'))


app.listen(8080, () => {
  console.log('API local 8080');
});
const express = require('express');
const stormpath = require('express-stormpath');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({express: 'Hello From Express'});
});

app.listen(port, () => console.log(`Listening on port $(port)`));

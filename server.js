'use strict';
const express = require('express');
const stormpath = require('express-stormpath');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cach: true, rateLimit: true, jwksRequestsPerMinute: 5,
    //YOUR-AUTH0-DOMAIN name e.g. prosper.auth0.com
    jwkUri: "https://sustainable.auth0.com/.well-known/jwks.json"
  }),
  //This is the identifier we set when we created the API
  audience: 'https://sustainable.auth0.com/api/v2/',
  issuer: 'sustainable.auth0.com',
  algorithms: ['RS256']
});

app.get('/api/jokes/food', (req, res) => {
  let foodJokes = [
    {
      id: 99991,
      joke: "When Chuck Norris was a baby, he didn't suck his mother's breast. His mother served him whiskey, straight out of the bottle."
    }, {
      id: 99992,
      joke: 'When Chuck Norris makes a burrito, its main ingredient is real toes.'
    }, {
      id: 99993,
      joke: 'Chuck Norris eats steak for every single meal. Most times he forgets to kill the cow.'
    }, {
      id: 99994,
      joke: "Chuck Norris doesn't believe in ravioli. He stuffs a live turtle with beef and smothers it in pig's blood."
    }, {
      id: 99995,
      joke: "Chuck Norris recently had the idea to sell his urine as a canned beverage. We know this beverage as Red Bull."
    }, {
      id: 99996,
      joke: 'When Chuck Norris goes to out to eat, he orders a whole chicken, but he only eats its soul.'
    }
  ];
  res.json(foodJokes);
});

app.get('/api/jokes/celebrity', (req, res) => {
  let CelebrityJokes = [
    {
      id: 88881,
      joke: 'As President Roosevelt said: "We have nothing to fear but fear itself. And Chuck Norris."'
    }, {
      id: 88882,
      joke: "Chuck Norris only lets Charlie Sheen think he is winning. Chuck won a long time ago."
    }, {
      id: 88883,
      joke: 'Everything King Midas touches turnes to gold. Everything Chuck Norris touches turns up dead.'
    }, {
      id: 88884,
      joke: 'Each time you rate this, Chuck Norris hits Obama with Charlie Sheen and says, "Who is winning now?!"'
    }, {
      id: 88885,
      joke: "For Charlie Sheen winning is just wishful thinking. For Chuck Norris it's a way of life."
    }, {
      id: 88886,
      joke: "Hellen Keller's favorite color is Chuck Norris."
    }
  ];
  res.json(CelebrityJokes);
})

app.get('/api/hello', (req, res) => {
  res.send("hello");
});

app.get('', (req, res) => {
  res.send({express: 'Hello From Express'});
});

app.listen(port, () => console.log(`Listening on port $(port)`));

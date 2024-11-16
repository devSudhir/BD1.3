const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/check-number', (req, res) => {
  const { number } = req.query;
  if (parseInt(number) > 0) {
    res.send(`Number is Positive`);
  } else {
    res.send(`Number is Negative`);
  }
});

app.get('/check-even-odd', (req, res) => {
  const { number } = req.query;
  if (number % 2 === 0) {
    res.send(`Number is even`);
  } else {
    res.send(`Number is odd`);
  }
});

app.get('/check-login', (req, res) => {
  const isLoggedIn = req.query.isLoggedIn === 'true';
  res.send(`User is ${isLoggedIn ? '' : 'not'} logged in`);
});

app.get('/check-discount', (req, res) => {
  const { age } = req.query;
  if (parseInt(age) > 65) {
    res.send(`User is eligible for a discount`);
  } else {
    res.send(`User is not eligible for a discount`);
  }
});

app.get('/check-number-type', (req, res) => {
  const { number } = req.query;
  let result;
  if (number > 0) {
    result = 'Positive';
  } else if (number < 0) {
    result = 'Negative';
  } else {
    result = 'Zero';
  }
  res.send(`The number is ${result}`);
});

app.get('/check-temperature', (req, res) => {
  const { temperature } = req.query;
  let tempCondition;
  if (temperature < 15) {
    tempCondition = 'cold';
  } else if (parseFloat(temperature) >= 15 && parseFloat(temperature) <= 25) {
    tempCondition = 'warm';
  } else {
    tempCondition = 'hot';
  }
  res.send(`Temperature is ${tempCondition}`);
});

app.get('/check-activity-level', (req, res) => {
  const { steps } = req.query;
  let activityCondition;
  if (steps < 5000) {
    activityCondition = 'low';
  } else if (parseFloat(steps) >= 5000 && parseFloat(steps) <= 10000) {
    activityCondition = 'moderate';
  } else {
    activityCondition = 'high';
  }
  res.send(`Activity level is ${activityCondition}`);
});

app.get('/check-engagement', (req, res) => {
  const { likes } = req.query;
  let likesCondition;
  if (likes < 100) {
    likesCondition = 'low';
  } else if (parseFloat(likes) >= 100 && parseFloat(likes) <= 500) {
    likesCondition = 'medium';
  } else {
    likesCondition = 'high';
  }
  res.send(`Engagement level is ${likesCondition}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

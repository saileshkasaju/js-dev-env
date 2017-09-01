import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(express.static('dist'));
app.use(compression());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {
      id: 1,
      firstName: 'Bob',
      lastName: 'Smith',
      email: 'bob@gmail.com'
    }, {
      id: 2,
      firstName: 'Cat',
      lastName: 'Smithonson',
      email: 'bobcat@gmail.com'
    }, {
      id: 3,
      firstName: 'Dog',
      lastName: 'Tiger',
      email: 'tigerdog@gmail.com'
    }
  ]);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

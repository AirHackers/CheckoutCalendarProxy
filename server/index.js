const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

// Handles HTML requests for a given ID, will be routed by React Router
app.get('/home/:homeID', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

app.listen(PORT, () => console.log(`Checkout service proxy listening to port ${PORT}`));

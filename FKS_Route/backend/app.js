const bodyParser = require('body-parser');
const express = require('express');

const customerRoutes = require('./routes/customers');
const authRoutes = require('./routes/auth');
const KRoutes = require('./routes/KServices');
const BServices = require('./routes/BlogServices');


const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

app.use(authRoutes);

app.use(KRoutes);
app.use(customerRoutes);
app.use(BServices);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
});

app.listen(3001);

import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/meals', async (req, res) => {
  const meals = await fs.readFile('./data/available-meals.json', 'utf8');
  res.json(JSON.parse(meals));
});

app.post('/orders', async (req, res) => {
  const orderData = req.body.order;

  if (orderData === null || orderData.items === null || !Array.isArray(orderData.items) || orderData.items.length === 0) {
    return res
      .status(400)
      .json({ message: 'Missing data.' });
  }

  if (
    orderData.customer.email === null ||
    !orderData.customer.email.includes('@') ||
    orderData.customer.name === null ||
    orderData.customer.name.trim() === '' ||
    orderData.customer.street === null ||
    orderData.customer.street.trim() === '' ||
    orderData.customer['postal-code'] === null ||
    orderData.customer['postal-code'].trim() === '' ||
    orderData.customer.city === null ||
    orderData.customer.city.trim() === ''
  ) {
    return res.status(400).json({
      message:
        'Missing data: Email, name, street, postal code or city is missing.',
    });
  }

  const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toString(),
  };
  const orders = await fs.readFile('./data/orders.json', 'utf8');
  const allOrders = JSON.parse(orders);
  allOrders.push(newOrder);
  await fs.writeFile('./data/orders.json', JSON.stringify(allOrders));
  res.status(201).json({ message: 'Order created!' });
});


app.post('/saveCustomer', async (req, res) => {
  const customerData = req.body;
console.log(customerData);
  if (customerData === null ) {
    return res
      .status(400)
      .json({ message: 'Missing data.' });
  }

  if (
    customerData.firstName === null ||
	customerData.middelName === null ||
	customerData.lastName === null ||
	customerData.dateBirth === null ||
	customerData.gender === null ||
	customerData.gender === null ||
	customerData.datePlace === null ||
	customerData.email === null ||
	customerData.pwd === null ||
	customerData.address1 === null ||
	customerData.mobileNo === null ||
	customerData.address2 === null ||
	customerData.city === null ||
	customerData.state === null ||
	customerData.zip === null ||
	customerData.chkValid === null 
	
  ) {
    return res.status(400).json({
      message:
        'Missing data: Email, name, street, postal code or city is missing.',
    });
  }

  const newCustomer = {
    ...customerData,
    id: (Math.random() * 1000).toString(),
  };
  const customers = await fs.readFile('./data/customerData.json', 'utf8');
  const allCustomers = JSON.parse(customers);
  allCustomers.push(newCustomer);
  await fs.writeFile('./data/customerData.json', JSON.stringify(allCustomers));
  res.status(201).json({ message: 'Successfully Customer Deatils Save!' });
});

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: 'Not found' });
});

app.listen(3000);

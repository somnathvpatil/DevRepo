const express = require('express');

const { getAll, get, add, replace, remove } = require('../data/customersdata');
const { checkAuth } = require('../util/auth');
const {
  isValidText,
  isValidDate,
  isValidImageUrl,
} = require('../util/validation');

const router = express.Router();

router.get('/getAllCustomer', async (req, res, next) => {
  console.log(req.token);
  console.log("test");
  try {
    const customers = await getAll();
    res.json(customers);
  } catch (error) {
    next(error);
  }
});

router.get('/getCustomer/:custId', async (req, res, next) => {
  try {
    const customer = await get(req.params.custId);
    res.json(customer);
  } catch (error) {
    next(error);
  }
});



router.use(checkAuth);

router.post('/saveCustomer', async (req, res, next) => {
  console.log(req.token);
  const data = req.body;

  let errors = {};
/*
  if (!isValidText(data.title)) {
    errors.title = 'Invalid title.';
  }

  if (!isValidText(data.description)) {
    errors.description = 'Invalid description.';
  }

  if (!isValidDate(data.date)) {
    errors.date = 'Invalid date.';
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = 'Invalid image.';
  }
*/
  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: 'Adding the User Registration failed due to validation errors for Kundali Generation..',
      errors,
    });
  }
console.log("data",data);
  try {
    await add(data);
    res.status(201).json({ message: 'User Registration Successfully Saved for Kundali.', customer: data });
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  const data = req.body;

  let errors = {};

  if (!isValidText(data.title)) {
    errors.title = 'Invalid title.';
  }

  if (!isValidText(data.description)) {
    errors.description = 'Invalid description.';
  }

  if (!isValidDate(data.date)) {
    errors.date = 'Invalid date.';
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = 'Invalid image.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: 'Updating the event failed due to validation errors.',
      errors,
    });
  }

  try {
    await replace(req.params.id, data);
    res.json({ message: 'Event updated.', event: data });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await remove(req.params.id);
    res.json({ message: 'Event deleted.' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

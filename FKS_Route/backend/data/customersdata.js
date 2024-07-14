const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util');

async function getAll() {
  const storedData = await readData();
  if (storedData == null) {
    throw new NotFoundError('Could not find any Customer.');
  }
  return storedData;
}

async function get(id) {
  const storedData = await readData();
  if (storedData == null || storedData.length === 0) {
    throw new NotFoundError('Could not find any Customer.');
  }
  const custData = storedData.find((ev) => ev.custId === id);
  if (!custData) {
    throw new NotFoundError('Could not find Customer for id ' + id);
  }

  return custData;
}

async function add(data) {
  const storedData = await readData();
  const newCustomer = {
    ...data,
    //custId: generateId(),
    custId: (Math.random() * 1000).toString(),
  };
  storedData.push(newCustomer);
  console.log("storedData",storedData);
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.customers || storedData.customers.length === 0) {
    throw new NotFoundError('Could not find any Customer.');
  }

  const index = storedData.customers.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find Customer for id ' + id);
  }

  storedData.events[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.customers.filter((cust) => cust.id !== id);
  await writeData({ ...storedData, customers: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;

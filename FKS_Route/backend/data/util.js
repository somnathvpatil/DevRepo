const fs = require('node:fs/promises');

async function readData() {
  const data = await fs.readFile('./jsonData/customers.json', 'utf8');
  return JSON.parse(data);
}

async function writeData(data) {
  console.log("data========",data);
  await fs.writeFile('./jsonData/customers.json', JSON.stringify(data));
}

exports.readData = readData;
exports.writeData = writeData;
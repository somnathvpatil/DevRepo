const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData,readDataKCust,writeDataKCustData } = require('./utilK');

async function getAll() {
  const readKData = await readData();
 /* if (!readKData.customers) {
    throw new NotFoundError('Could not find any KData.');
  }*/
  return readKData;
}
async function getKCustDetails(custId) {
    const readKCust = await readDataKCust(custId);
   /* if (!readKData.customers) {
      throw new NotFoundError('Could not find any KData.');
    }*/
   console.log("readKCust",readKCust);
    return readKCust;
  }
async function saveKCustDetails(kunaliGenData) {
  const storedData = await writeDataKCustData(kunaliGenData);
  return storedData;
}
exports.getKCustDetails = getKCustDetails;  
exports.getAll = getAll;
exports.saveKCustDetails=saveKCustDetails


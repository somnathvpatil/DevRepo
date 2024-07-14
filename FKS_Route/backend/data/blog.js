const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData,writeData } = require('./utilBlog');

async function saveBlogDetails(blogData) {
  const storedData = await writeData(blogData);
  return storedData;
}

exports.saveBlogDetails=saveBlogDetails



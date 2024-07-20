const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readBlogData,writeData } = require('./utilBlog');

async function saveBlogDetails(blogData) {
  const readData = await readBlogData();
  const newBlog = {
    ...blogData,
    blogId: generateId()
  };
  readData.push(newBlog);
  const storedData = await writeData(readData);

  return storedData;
}

async function getBlogByDate(dtp) {
  const readData = await readBlogData();
  console.log("dtp",dtp);
  const blogData = readData.find((bd) => bd.blogDate === dtp);
  if (!blogData) {
    throw new NotFoundError('Could not find Blog Details for date ' + dtp);
  }
  return blogData;
}
exports.saveBlogDetails=saveBlogDetails
exports.getBlogByDate=getBlogByDate



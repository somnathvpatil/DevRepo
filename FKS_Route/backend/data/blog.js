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
  let BRData=[];
  console.log("dtp",dtp);
  
  for (var i = 0; i < readData.length; i++) {
    if (readData[i].blogDate===dtp) {
      BRData.push(readData[i]);      
    }
  }
  return BRData;
}

async function getBlogByBlogId(blogId) {
  const readData = await readBlogData();
  let BRData;
  console.log("blogId",blogId);
  
  for (var i = 0; i < readData.length; i++) {
    if (readData[i].blogId===blogId) {
      BRData=readData[i]; 
      break;     
    }
  }
  return BRData;
}
async function getAllBlogDetails() {
  const readData = await readBlogData();
  return readData;
}
exports.saveBlogDetails=saveBlogDetails
exports.getBlogByDate=getBlogByDate
exports.getAllBlogDetails=getAllBlogDetails
exports.getBlogByBlogId=getBlogByBlogId



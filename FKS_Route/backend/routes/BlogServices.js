const express = require('express');

const { saveBlogDetails,getBlogByDate,getAllBlogDetails,getBlogByBlogId } = require('../data/blog');


const router = express.Router();

router.get('/getAllBlogDetails', async (req, res, next) => {
  try {
    const blogData = await getAllBlogDetails();
    res.json(blogData);
  } catch (error) {
    next(error);
  }
});

router.get('/getBlogByDate/:dtp', async (req, res, next) => {
  const dtp =req.params.dtp;
  console.log("dtp",dtp);
  try {
    const blogData = await getBlogByDate(dtp);
    console.log("blogData",blogData);
    res.json(blogData);
  } catch (error) {
    next(error);
  }
});


router.get('/getBlogById/:blogId', async (req, res, next) => {
  const blogId =req.params.blogId;
  console.log("dtp",blogId);
  try {
    const blogData = await getBlogByBlogId(blogId);
    console.log("blogData",blogData);
    res.json(blogData);
  } catch (error) {
    next(error);
  }
});
  router.post('/saveBlogDetails', async (req, res,next) => {
    const blogData = req.body;
    try {
      const blogKData = await saveBlogDetails(blogData);
      //res.status(custKData.status).json({ message: custKData.message });  
      res.json(blogKData);  
    } catch (error) {
      next(error);
    }  
  });





module.exports = router;

const express = require('express');

const { saveBlogDetails } = require('../data/blog');
const { checkAuth } = require('../util/auth');


const router = express.Router();

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
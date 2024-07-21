const express = require('express');

const { sentEmail } = require('../data/emailUtil');
const { checkAuth } = require('../util/auth');


const router = express.Router();

router.use(checkAuth);

  router.post('/sendMail', async (req, res,next) => {
    const mailReqData = req.body;
    try {
        console.log("mailReqData",mailReqData);    
      const mailResData = await sentEmail(mailReqData);    
      console.log("mailResData",mailResData);  
      res.json(mailResData);  
    } catch (error) {
      next(error);
    }  
  });

module.exports = router;

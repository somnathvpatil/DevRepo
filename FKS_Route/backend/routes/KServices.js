const express = require('express');

const { getAll,getKCustDetails,saveKCustDetails } = require('../data/KData');
const { checkAuth } = require('../util/auth');
const {
  isValidText,
  isValidDate,
  isValidImageUrl,
} = require('../util/validation');

const router = express.Router();

router.get('/kundaliGen', async (req, res, next) => {
  console.log(req.token);
  try {
    const KData = await getAll();
    res.json({ KData: KData });
  } catch (error) {
    next(error);
  }
});

router.get('/getkundaliAndCustData/:custId', async (req, res, next) => {
    const custId =req.params.custId;
    console.log(custId);
   // console.log(req.token);
    try {
      const CustKData = await getKCustDetails(custId);
      console.log("CustKData",CustKData);
      res.json(CustKData);
    } catch (error) {
      next(error);
    }
  });

  router.post('/saveKundaliGen', async (req, res,next) => {
    const kunaliGenData = req.body;
    try {
      const custKData = await saveKCustDetails(kunaliGenData);
      //res.status(custKData.status).json({ message: custKData.message });  
      res.json(custKData);  
    } catch (error) {
      next(error);
    }  
  });

module.exports = router;

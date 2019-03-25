const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    name: 'Attendance API'
  });
});

router.use('/academics', require('./academics'));
router.use('/people', require('./people'));
router.use('/student', require('./student'));


module.exports = router;

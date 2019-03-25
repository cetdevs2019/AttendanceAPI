const express = require('express');

const router = express.Router();

router.use('/courses_offered', require('./courses_offered'));

module.exports = router;
